import logo from './logo.svg';
import JoblyApi from "./api"
import AppRoutes from './AppRoutes';
import React, { useState, useEffect, createContext } from "react";
// import { update } from '../../backend/models/user';


function App() {
  const [currUser, setCurrUser] = useState();
  const [currToken, setToken] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  // const [jobs, setJob] = useState([]);

  const Context = createContext()


  // Gets the drinks and snacks on load and sets them in state
  useEffect(() => {
    async function getCompanies() {
      let companies = await JoblyApi.getAllCompanies();
      setCompanies(companies)
      setIsLoading(false);
    }
    getCompanies()
  }, []);

  useEffect(() => {
    function updateUser(){
      console.log(currUser, currToken, "curruser, currtoken in useeffect updateuser()")
      setIsLoading(false);
    }
    updateUser()
  }, [currToken, currUser])

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  async function register(userData) {
    console.log(userData, "user in App register func")
    let user = await JoblyApi.registerUser(userData);
    console.log(user, "user after reg")
    console.log(user.username, user.token, "user.username and user.token before setState runs")
    setCurrUser(user.username)
    setToken(user.token)
    console.log(currUser, currToken, "curruser and token in state")
  }

async function login(userData) {
    console.log(userData, "user in login func")
    let user = await JoblyApi.loginUser(userData);
    setCurrUser(user.username)
    setToken(user.token)
    console.log(currUser, currToken)
    console.log(user, "user after login")
  }

async function logout(){

}

  return (
    <div className="App">
      <header className="App-header">
          <AppRoutes register={register} login={login} logout={logout} />
      </header>
    </div>
  );
}

export default App;
