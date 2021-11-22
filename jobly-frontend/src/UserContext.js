import React from "react";

const UserContext = React.createContext({username: "guest", token: "invalid"});

export default UserContext;
