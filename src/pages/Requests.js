import React, { useEffect, useState } from 'react';
import RequestService from '../services/RequestService';
import RequestTable from '../components/RequestTable';

const Requests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await RequestService.getRequests();
      setRequests(result.data);
    };
    fetchData();
  }, []);

  const handleEdit = (id) => {
    // Handle edit action, e.g., navigate to UpdateRequest page with id
  };

  return (
    <div>
      <h1>Requests</h1>
      <RequestTable requests={requests} onEdit={handleEdit} />
    </div>
  );
};

export default Requests;
