import React, { useState } from "react";

const HomePage = ({ user }) => {

    console.log(typeof(user.username), "user in homepage")
    const greeting = typeof(user.username) == "string" ? `Welcome back, ${user.username}` : "Welcome guest, please register to enjoy all of Jobly's features!"
    console.log(greeting, "this is greeting", user.username)
 
    return (
    <div>
      <div class="container text-center">
        <h1 class="mb-4 font-weight-bold">Jobly</h1>
        <p>All your job needs in one convenient place</p>
        <h4>{greeting}</h4>
      </div>
    </div>
  );
};

export default HomePage;
