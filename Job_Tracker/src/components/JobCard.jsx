import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => (
  <div className="card">
    <h3>{job.company}</h3>
    <p>{job.title}</p>
    <p>Status: {job.status}</p>
    <p>Applied: {job.date}</p>
    <Link to={`/job/${job.id}`}>View Details</Link>
  </div>
);

export default JobCard;
