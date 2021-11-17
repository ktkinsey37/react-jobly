import React, { useState } from "react";


const JobSearchBar = ({ searchJobs }) => {
  const INITIAL_STATE = {title: ""};
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {name, quantity} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    searchJobs(formData);
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
      <input
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Job Searchterm"
      />

      <button>Search</button>
    </form>
  );
};

export default JobSearchBar;
