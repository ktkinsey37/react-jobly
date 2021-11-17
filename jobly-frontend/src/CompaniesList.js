import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import CompanySearchBar from "./CompanySearchBar"
// import "./Menu.css";
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
    // const [searchTerm, setSearchTerm] = useState()
    // const [jobs, setJob] = useState([]);
  
    // Gets the drinks and snacks on load and sets them in state
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
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>
            <CompanySearchBar search={search}/>
          </CardText>
          <ListGroup>
            {companies.map(company => (
              <Link to={`/companies/${company.handle}`}>
                <ListGroupItem>{company.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default CompaniesList;
