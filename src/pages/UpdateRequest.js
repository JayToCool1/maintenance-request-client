import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RequestService from '../services/RequestService';

const UpdateRequest = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchRequest = async () => {
      const result = await RequestService.getRequest(id);
      setTitle(result.data.title);
      setDescription(result.data.description);
    };
    fetchRequest();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await RequestService.updateRequest(id, { title, description });
    // Redirect to Requests page or handle success
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      <button type="submit">Update Request</button>
    </form>
  );
};

export default UpdateRequest;
