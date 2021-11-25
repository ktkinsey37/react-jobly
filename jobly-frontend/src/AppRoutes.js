import React, {useContext} from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import JoblyApi from "./api"
import NavBar from "./NavBar";
import CompaniesList from "./CompaniesList";
import Company from "./Company";
import JobsList from "./JobsList";
import LoginForm from "./LoginForm";
import Logout from "./Logout";
import RegistrationForm from "./RegistrationForm";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile"
import UserContext from "./UserContext";


function AppRoutes({register, login, logout, editProfile}) {

    const user = useContext(UserContext)
    console.log(user, "this is user in approutes.js")

    if (user.username == undefined && user.token == undefined){
        return (
            <BrowserRouter>
            <NavBar />
            <main>
            <Routes>
                <Route exact path="/" element={<Company />}/>
                <Route exact path="/login" element={<LoginForm login={login}/>}/>
                <Route path="/register" element={<RegistrationForm register={register}/>}/>
                <Route element={<p>Hmmm. I can't seem to find what you want.</p>}/>
            </Routes>
            </main>
            </BrowserRouter>
        );
    }
  
    return (
        <BrowserRouter>
        <NavBar />
        <main>
        <Routes>
            <Route exact path="/" element={<Company />}/>
            <Route exact path="/companies" element={<CompaniesList />}/>
            <Route exact path="/companies/:companySlug" cantFind="/companies" element={<Company />}/>
            <Route path="/jobs" element={<JobsList />}/>
            <Route exact path="/logout" element={<Logout logout={logout}/>}/>
            <Route path="/profile" element={<UserProfile user={user} editProfile={editProfile}/>}/>
            <Route element={<p>Hmmm. I can't seem to find what you want.</p>}/>
        </Routes>
        </main>
        </BrowserRouter>
    );
  }
  
  export default AppRoutes;
  
