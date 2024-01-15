// src/components/TableComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const TableComponent = () => {
  const [data, setData] = useState([]);
  const buttonStyle = {
    background: 'radial-gradient(circle, rgba(136,224,236,1) 0%, rgba(81,154,240,1) 100%)',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };

  useEffect(() => {
    axios.get('http://localhost:3001/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <div>
      <h2>Leituras Sistemas Sensores</h2>
      <div>
      <Link to="/home">
          <button style={buttonStyle} >
            Logout
          </button>
        </Link>
      </div>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>BaseStation</th>
            <th>Movement</th>
            <th>Temperature</th>
            <th>Timestamp</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {data.map(entry => (
            <tr key={entry._id}>
              <td>{entry.BaseStation}</td>
              <td>{entry.Movimento}</td>
              <td>{entry.Temperatura}</td>
              <td>{entry.Timestamp}</td>
              <td>{entry.Humidade}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      
    </div>
  );
};

export default TableComponent;
