import logo from './logo.svg';
import JoblyApi from "./api"
import AppRoutes from './AppRoutes';
import React, { useState, useEffect } from "react";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  // const [jobs, setJob] = useState([]);

  // Gets the drinks and snacks on load and sets them in state
  useEffect(() => {
    async function getCompanies() {
      let companies = await JoblyApi.getAllCompanies();
      console.log(companies, "THIS is companies")
      setCompanies(companies)
      setIsLoading(false);
    }
    getCompanies()
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <AppRoutes />
      </header>
    </div>
  );
}

export default App;
