import React, {useEffect, useState, useContext} from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";
import JoblyApi from "./api";
import "./JobCard.css";
import { Redirect, useParams } from "react-router-dom";
import UserContext from "./UserContext";



function JobCard({ job, apply, appliedJobs, ranApplyFunc, setRanApplyFunc }) {

    const [isLoading, setIsLoading] = useState(false);
    const user = useContext(UserContext)

    const [company, setCompany] = useState([]);
    const [jobs, setJobs] = useState([]);

    const handleClick = evt => {
        evt.preventDefault();
        apply(user.username, job.id);
        appliedJobs.push(job.id)
        ranApplyFunc = true
        setRanApplyFunc(ranApplyFunc)
        console.log(ranApplyFunc, "ranapply func in job card")
      };

    // useEffect(() => {
    //   function isApplied() {
    //     setJobs(company.jobs)
    //     setCompany(company)
    //     setIsLoading(false);
    //   }
    //   isApplied()
    // }, []);
    // REMEMBER TO CHANGE USESTATE FOR ISLOADING BACK TO TRUE WHEN FIXED

  
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }

    if (appliedJobs.includes(job.id) == true){
        return(
        <section className="col-md-4" className="JobCard">
        <Card>
          <CardBody className="col-md-12 ">
            <CardTitle className="font-weight-bold text-center">
              <h3>{job.title}</h3>
            </CardTitle>
            <CardText>
                <h4>{job.companyName}</h4>
                Salary: {job.salary}
                <br/>
                Equity: {job.equity}
                <button className="btn button btn-danger font-weight-bold text-uppercase float-right disabled" >Applied</button>
            </CardText>            
          </CardBody>
        </Card>
      </section>)
    }
  
    return (
      <section className="col-md-4" className="JobCard">
        <Card>
          <CardBody className="col-md-12 ">
            <CardTitle className="font-weight-bold text-center">
              <h3>{job.title}</h3>
            </CardTitle>
            <CardText>
                <h4>{job.companyName}</h4>
                Salary: {job.salary}
                <br/>
                Equity: {job.equity}
                <button className="button btn btn-danger font-weight-bold text-uppercase float-right" onClick={handleClick}>Apply</button>

            </CardText>            
          </CardBody>
          
        </Card>
      </section>
    );
  }
  
  export default JobCard;