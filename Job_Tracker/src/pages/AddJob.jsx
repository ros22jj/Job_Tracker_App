import React, { useContext } from 'react';
import { JobContext } from '../context/JobContext';
import JobForm from '../components/JobForm';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
  const { addJob } = useContext(JobContext);
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Add New Job</h1>
      <JobForm onSubmit={(data) => {
        addJob(data);
        navigate('/');
      }} />
    </div>
  );
};

export default AddJob;
