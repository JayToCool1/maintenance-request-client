import React from 'react';

const RequestTable = ({ requests, onEdit }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {requests.map(request => (
        <tr key={request.id}>
          <td>{request.id}</td>
          <td>{request.title}</td>
          <td>{request.description}</td>
          <td>
            <button onClick={() => onEdit(request.id)}>Edit</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default RequestTable;
