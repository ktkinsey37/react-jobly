import React, {useEffect, useState} from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";
import JoblyApi from "./api";
import "./CompanyCard.css"
import { Redirect, useParams } from "react-router-dom";



function CompanyCard({ company }) {

    const [isLoading, setIsLoading] = useState(false);
    // const [company, setCompany] = useState([]);
    // const [jobs, setJobs] = useState([]);

    console.log(company, "this is company in company card")

  
    // useEffect(function getCompanyAndJobs() {
    //   async function getCompany() {
    //     let companyRes = await JoblyApi.getCompany(company);
    //     setJobs(companyRes.jobs)
    //     setCompany(company)
    //     setIsLoading(false);
    //   }
    //   getCompany()
    // }, [c]);

    let logoUrl

    if (company.logoUrl != null){
        logoUrl = `http://joelburton-jobly.surge.sh/${company.logoUrl}`
    }
    
  
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }
  
    return (
      <section className="col-md-4" className="CompanyCard">
        <Card style={{ width: '18rem' }}>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              {company.name}
              <br/>
            </CardTitle>
            <CardText>
              {company.description}
            </CardText>
            <img src={logoUrl} className="float-right ml-5"/>
          </CardBody>
        </Card>
      </section>
    );
  }
  
  export default CompanyCard;