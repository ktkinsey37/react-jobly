import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
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
import JobSearchBar from "./JobSearchBar";

function JobsList() {

    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    // const [jobs, setJob] = useState([]);
  
    // Gets the drinks and snacks on load and sets them in state
    useEffect(() => {
      async function getJobs() {
        let jobs = await JoblyApi.getAllJobs();
        console.log(jobs, "THIS is jobs")
        setJobs(jobs)
        setIsLoading(false);
      }
      getJobs()
    }, []);

    async function searchJobs(title) {
        let res = await JoblyApi.getJobsQuery(title);
        setJobs(res);
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
            <JobSearchBar searchJobs={searchJobs}/>
          </CardText>
          <ListGroup>
            {jobs.map(job => (
                    <ListGroupItem>{job.title}</ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default JobsList;
