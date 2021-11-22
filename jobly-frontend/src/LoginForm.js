import React, { useState } from "react";

/** Form for creating a new item to add to a list.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const LoginForm = ({ login }) => {
  const INITIAL_STATE = {username: "", password: ""};
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {name, quantity} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    login(formData);
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

  /** render form */

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <br/>

      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Minimum 5 characters"
      />
      <br/>


      <button>Login</button>
    </form>
  );
};

export default LoginForm;
