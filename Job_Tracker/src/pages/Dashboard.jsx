import React, { useContext } from 'react';
import { JobContext } from '../context/JobContext';
import JobCard from '../components/JobCard';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { jobs } = useContext(JobContext);

  return (
    <div className="page">
      <h1>Job Applications</h1>
      <Link to="/add" className="add-btn">+ Add Job</Link>
      <div className="grid">
        {jobs.map(job => <JobCard key={job.id} job={job} />)}
      </div>
    </div>
  );
};

export default Dashboard;
