import logo from './logo.svg';
import JoblyApi from "./api"
import AppRoutes from './AppRoutes';
import React, { useState, useEffect, createContext } from "react";
import UserContext from './UserContext';
import useLocalStorage from './hooks/useLocalStorage';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { update } from '../../backend/models/user';


function App() {
  const [currUser, setCurrUser] = useLocalStorage("currUser", [undefined]);
  const [currToken, setToken] = useLocalStorage("currToken", undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);





  // Gets the drinks and snacks on load and sets them in state
  useEffect(() => {
    async function getCompanies() {
      let companies = await JoblyApi.getAllCompanies();
      setCompanies(companies)
      setIsLoading(false);
    }
    getCompanies()
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  async function register(userData) {
    let user = await JoblyApi.registerUser(userData);
    setCurrUser(user)
    setToken(user.token)
  }

async function login(userData) {
    let user = await JoblyApi.loginUser(userData);
    setCurrUser(user.username)
    setToken(user.token)
  }

async function logout(){
  setCurrUser(undefined)
  setToken(undefined)
  localStorage.clear()
}

async function apply(currUsername, jobId){
  let applied = await JoblyApi.applyForJob(currUsername, jobId)
}

async function editProfile(userData){
  let user = await JoblyApi.editUser(userData)
}

  return (
    <UserContext.Provider value = {{username: currUser, token: currToken}}>
    <div className="App">
      <header className="App-header">

          <AppRoutes register={register} login={login} logout={logout} editProfile={editProfile} apply={apply} />
      </header>
    </div>
    </UserContext.Provider>
  );
}

export default App;
