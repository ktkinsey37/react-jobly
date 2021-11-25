import React, {useEffect, useState} from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";
import JoblyApi from "./api";
import { Redirect, useParams } from "react-router-dom";



function UserProfile({user, editProfile}) {

    const [isLoading, setIsLoading] = useState(true);
    console.log(user, "user as its passed to userprofile")

let INITIAL_STATE = {username: user.username, password: "", firstName: user.firstName, lastName: user.lastName, email: user.email };
    const [formData, setFormData] = useState();


    useEffect(() => {
        async function getUser() {
          let currUser = await JoblyApi.getUser(user.username);
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

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { name, value }= evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };




  
    // Gets the drinks and snacks on load and sets them in state
    useEffect(() => {
      async function getUser() {
        let userProfile = await JoblyApi.getUser(user.username);
        console.log(userProfile, "this is user in the useeffect on profile page")
        setIsLoading(false);
      }
      getUser()
    }, []);
  
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }
  
    return (
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
    
          <button>Confirm changes</button>
        </form>
      );
  }
  
  export default UserProfile;