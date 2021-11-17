import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import CompaniesList from "./CompaniesList";
import Company from "./Company";
import JobsList from "./JobsList";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile"


function AppRoutes() {
  
    return (
        <BrowserRouter>
        <NavBar />
        <main>
        <Routes>
            <Route exact path="/" element={<Company />}/>
            <Route exact path="/companies" element={<CompaniesList />}/>
            <Route exact path="/companies/:companySlug" cantFind="/companies" element={<Company />}/>
            <Route path="/jobs" element={<JobsList />}/>
            <Route exact path="/login" element={<LoginForm/>}/>
            <Route path="/signup" element={<RegistrationForm/>}/>
            <Route path="/profile" element={<UserProfile/>}/>
            <Route element={<p>Hmmm. I can't seem to find what you want.</p>}/>
        </Routes>
        </main>
        </BrowserRouter>
    );
  }
  
  export default AppRoutes;
  
