import React, { useState } from 'react';
import RequestService from '../services/RequestService';

const AddRequest = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await RequestService.addRequest({ title, description });
    // Redirect to Requests page or handle success
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      <button type="submit">Add Request</button>
    </form>
  );
};

export default AddRequest;
