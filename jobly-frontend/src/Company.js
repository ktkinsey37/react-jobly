import React, {useEffect, useState} from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";
import JoblyApi from "./api";
import { Redirect, useParams } from "react-router-dom";



function Company() {
    const { companySlug } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [company, setCompany] = useState([]);
    const [jobs, setJobs] = useState([]);



  
    // Gets the drinks and snacks on load and sets them in state
    useEffect(function getCompanyAndJobs() {
      async function getCompany() {
        let company = await JoblyApi.getCompany(companySlug);
        setJobs(company.jobs)
        setCompany(company)
        setIsLoading(false);
      }
      getCompany()
    }, [companySlug]);
  
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }
  
    return (
      <section className="col-md-4">
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              {company.name}
              {jobs.map(job => <h3>{job.title}</h3>)}
            </CardTitle>
            <CardText>

            </CardText>
          </CardBody>
        </Card>
      </section>
    );
  }
  
  export default Company;