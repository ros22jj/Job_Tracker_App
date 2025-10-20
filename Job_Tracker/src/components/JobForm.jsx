import React, { useState } from 'react';

const JobForm = ({ initial = {}, onSubmit }) => {
  const [form, setForm] = useState({
    company: initial.company || '',
    title: initial.title || '',
    status: initial.status || 'Applied',
    date: initial.date || '',
    notes: initial.notes || '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="company" placeholder="Company" value={form.company} onChange={handleChange} required />
      <input name="title" placeholder="Job Title" value={form.title} onChange={handleChange} required />
      <select name="status" value={form.status} onChange={handleChange}>
        <option>Applied</option>
        <option>Interviewing</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input name="date" type="date" value={form.date} onChange={handleChange} required />
      <textarea name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};

export default JobForm;
