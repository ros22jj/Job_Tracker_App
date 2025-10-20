import React, { createContext, useState, useEffect } from 'react';

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('jobs');
    if (stored) setJobs(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => setJobs([...jobs, { ...job, id: Date.now().toString() }]);
  const updateJob = (id, updated) => setJobs(jobs.map(j => j.id === id ? updated : j));
  const deleteJob = (id) => setJobs(jobs.filter(j => j.id !== id));

  return (
    <JobContext.Provider value={{ jobs, addJob, updateJob, deleteJob }}>
      {children}
    </JobContext.Provider>
  );
};
