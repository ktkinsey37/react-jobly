import React, {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
// import "./Menu.css";
import JobCard from "./JobCard";
import JoblyApi from "./api";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import UserContext from "./UserContext";
import JobSearchBar from "./JobSearchBar";

function JobsList({ apply }) {

    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [appliedJobs, setAppliedJobs] = useState([])
    const [ranApplyFunc, setRanApplyFunc] = useState([false])
    const user = useContext(UserContext)

    useEffect(() => {
      async function getJobs() {
        console.log(user, "this is user in getjobs")
        let jobs = await JoblyApi.getAllJobs();
        let {applications} = await JoblyApi.getUser(user.username)
        setAppliedJobs(applications)
        setJobs(jobs)
        setIsLoading(false);
        setRanApplyFunc(false)
      }
      getJobs()
    }, [ranApplyFunc]);

    async function searchJobs(title) {
        let res = await JoblyApi.getJobsQuery(title);
        setJobs(res);
      }
  
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }

  return (
    <section className="col-md-10">
      <Card style={{ width: '18rem' }}>
        <CardBody style={{ width: '18rem' }}>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>
            <JobSearchBar searchJobs={searchJobs}/>
          </CardText>
          <ListGroup>
            {jobs.map(job => (
                    <JobCard job={job} apply={apply} appliedJobs={appliedJobs} ranApplyFunc={ranApplyFunc} setRanApplyFunc={setRanApplyFunc} />
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default JobsList;
