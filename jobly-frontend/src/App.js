import logo from './logo.svg';
import JoblyApi from "./api"
import AppRoutes from './AppRoutes';
import React, { useState, useEffect, createContext } from "react";
import UserContext from './UserContext';
// import { update } from '../../backend/models/user';


function App() {
  const [currUser, setCurrUser] = useState();
  const [currToken, setToken] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  // const [jobs, setJob] = useState([]);

  // const Context = createContext()
  let user = {}
  user.username = localStorage.getItem('currUser');
  user.token = localStorage.getItem('currToken');

  console.log(user, "this is user as app renders the first time")

  componentDidMount(){
      if (user.username != undefined && user.token != undefined){
    setToken(user.token)
    setCurrUser(user.username)
  }
  }




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
    let user = await JoblyApi.registerUser(userData);
    setCurrUser(user.username)
    setToken(user.token)
    console.log(currUser, currToken, "curruser and token in state")
    localStorage.setItem('currUser', user.username);
    localStorage.setItem('currToken', user.token);
  }

async function login(userData) {
    let user = await JoblyApi.loginUser(userData);
    setCurrUser(user.username)
    setToken(user.token)
    console.log(currUser, currToken)
    console.log(user, "user after login")
    localStorage.setItem('currUser', user.username);
    localStorage.setItem('currToken', user.token);
  }

async function logout(){
  setCurrUser(undefined)
  setToken(undefined)
  localStorage.setItem('currUser', undefined);
  localStorage.setItem('currToken', undefined);
}

  return (
    <UserContext.Provider value = {{username: currUser, token: currToken}}>
    <div className="App">
      <header className="App-header">

          <AppRoutes register={register} login={login} logout={logout} />
      </header>
    </div>
    </UserContext.Provider>
  );
}

export default App;
