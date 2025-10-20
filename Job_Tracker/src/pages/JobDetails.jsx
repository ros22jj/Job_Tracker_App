import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { JobContext } from '../context/JobContext';
import JobForm from '../components/JobForm';

const JobDetails = () => {
  const { id } = useParams();
  const { jobs, updateJob, deleteJob } = useContext(JobContext);
  const navigate = useNavigate();
  const job = jobs.find(j => j.id === id);

  if (!job) return <p>Job not found</p>;

  return (
    <div className="page">
      <h1>Edit Job</h1>
      <JobForm initial={job} onSubmit={(data) => {
        updateJob(id, { ...data, id });
        navigate('/');
      }} />
      <button onClick={() => {
        deleteJob(id);
        navigate('/');
      }} className="delete-btn">Delete</button>
    </div>
  );
};

export default JobDetails;
