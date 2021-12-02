import React, {useEffect, useState, useContext} from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import { Redirect, useParams } from "react-router-dom";
import UserContext from "./UserContext";



function Company({ apply }) {
    const { companySlug } = useParams();
    const [appliedJobs, setAppliedJobs] = useState([])
    const [ranApplyFunc, setRanApplyFunc] = useState([false])
    const [isLoading, setIsLoading] = useState(true);
    const [company, setCompany] = useState([]);
    const [jobs, setJobs] = useState([]);
    const user = useContext(UserContext)




  
    useEffect(function getCompanyAndJobs() {
      async function getCompany() {
        let company = await JoblyApi.getCompany(companySlug);
        let {applications} = await JoblyApi.getUser(user.username)
        setAppliedJobs(applications)
        setJobs(company.jobs)
        setCompany(company)
        setIsLoading(false);
        setRanApplyFunc(false)
      }
      getCompany()
    }, [companySlug, ranApplyFunc]);
  
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }
  
    return (
      <section className="col-md-4">
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              {company.name}
              {jobs.map(job => (
                <JobCard job={job} apply={apply} appliedJobs={appliedJobs} ranApplyFunc={ranApplyFunc} setRanApplyFunc={setRanApplyFunc} />
        ))}
            </CardTitle>
            <CardText>

            </CardText>
          </CardBody>
        </Card>
      </section>
    );
  }
  
  export default Company;