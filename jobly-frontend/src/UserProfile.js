import React, {useEffect, useState, useContext} from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";
import JoblyApi from "./api";
import { Redirect, useParams } from "react-router-dom";
import UserContext from "./UserContext";



function UserProfile({ editProfile}) {

  const user = useContext(UserContext)

    const [isLoading, setIsLoading] = useState(true);
    console.log(user, "user as its passed to userprofile")

let INITIAL_STATE = {username: user.username, password: "", firstName: user.firstName, lastName: user.lastName, email: user.email };
    const [formData, setFormData] = useState();


    useEffect(() => {
        async function getUser() {
          console.log(user, "user.username in userprofile")
          let currUser = await JoblyApi.getUser(user.username);
          console.log(currUser, "curruser in the userprofile geteffect")
          const INITIAL_STATE = {username: currUser.username, password: "", firstName: currUser.firstName, lastName: currUser.lastName, email: currUser.email };
          setFormData(INITIAL_STATE)
          setIsLoading(false);
        }
        getUser()
      }, []);

  const handleSubmit = evt => {
    evt.preventDefault();
    editProfile(formData);
    setFormData(INITIAL_STATE);
  };


  const handleChange = evt => {
    const { name, value }= evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };
  
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }
  
    return (
      <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
        <form onSubmit={handleSubmit}>
          <label >Username:</label>
          {user.username}
          <br/>    
    
          <label>First Name:</label>
          <input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <br/>
    
    
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <br/>
    
    
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br/>

          <label htmlFor="password">Confirm password to make changes:</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <br/>
    
          <button >Confirm changes</button>
        </form>
        </div>
      );
  }
  
  export default UserProfile;