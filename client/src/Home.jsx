import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const centerContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',  // Set minimum height to cover the entire viewport
    backgroundColor: '#3498db',  // Set background color
    color: 'white',  // Set text color
  };

  const leftContainerStyle = {
    textAlign: 'center',
    marginRight: '20px',  // Add some spacing between the left and right containers
  };

  const rightContainerStyle = {
    textAlign: 'center',
    marginLeft: '20px',  // Add some spacing between the left and right containers
  };

  const titleStyle = {
    marginBottom: '20px',  // Add some spacing between the title and the text
  };

 

  const buttonStyle = {
    background: 'radial-gradient(circle, rgba(136,224,236,1) 0%, rgba(81,154,240,1) 100%)',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };

  const imageStyle = {
    maxWidth: '80%',  // Adjust the maximum width of the image
    height: 'auto',
  };

  return (
    <div style={centerContainerStyle}>
      <div style={leftContainerStyle}>
        <div style={titleStyle}>
          <h2>Sistema de Monitorização de uma Smart Home</h2>
        </div>
        <Link to="/register">
          <button style={buttonStyle} >
            Login
          </button>
        </Link>
      </div>
      <div style={rightContainerStyle}>
        <img
          src="../src/iot-3337536.png"
          alt="Smart Home Image"
          style={imageStyle}
        />
      </div>
    </div>
  );
}

export default Home;
