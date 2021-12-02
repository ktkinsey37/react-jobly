import React, { useState } from "react";


const JobSearchBar = ({ searchJobs }) => {
  const INITIAL_STATE = {title: ""};
  const [formData, setFormData] = useState(INITIAL_STATE);


  const handleSubmit = evt => {
    evt.preventDefault();
    searchJobs(formData);
    setFormData(INITIAL_STATE);
  };


  const handleChange = evt => {
    const { name, value }= evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  return (
    <div>
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
    </div>
  );
};

export default JobSearchBar;
