import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import CompanySearchBar from "./CompanySearchBar"
import CompanyCard from "./CompanyCard"
import JoblyApi from "./api";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function CompaniesList({ itemsObject }) {

    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
      async function getCompanies() {
        let companies = await JoblyApi.getAllCompanies();
        console.log(companies, "THIS is companies")
        setCompanies(companies)
        setIsLoading(false);
      }
      getCompanies()
    }, []);

    async function search(name) {
        console.log(name, "name in search")
        let companies = await JoblyApi.getCompaniesQuery(name);
        setCompanies(companies);
      }
  
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }

  return (
    <div className="col-md-12 offset-md-4">
    <br/>
    <section className="col-md-10">
      <Card style={{ width: '30rem' }}>
        <CardBody className="col-md-12 ">
          <CardTitle className="font-weight-bold text-center">
            <h2>Companies</h2>
          </CardTitle>
          <CardText>
            <CompanySearchBar search={search}/>
          </CardText>
          <ListGroup>
            {companies.map(company => (
              <Link to={`/companies/${company.handle}`}>
                <CompanyCard company={company}/>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
    </div>
  );
}

export default CompaniesList;
