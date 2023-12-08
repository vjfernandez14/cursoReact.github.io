// Loader.jsx
import React from 'react';
import { Spinner } from 'react-bootstrap'; // Puedes cambiar esto por el spinner que prefieras

const Loader = ({ loading }) => {
  return (
    <div>
      {loading && (
        <div className="loader-container">
          <Spinner animation="grow" variant="warning" />
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Loader;
