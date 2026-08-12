import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page" style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: 'var(--spacing-xxl)',
      textAlign: 'center'
    }}>
      <div className="container">
        <h1 className="display-large" style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
          404
        </h1>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-lg)' }}>
          Page Not Found
        </h2>
        <div className="gold-divider center" style={{ margin: '0 auto var(--spacing-xl)' }}></div>
        <p className="body-large" style={{ color: 'var(--color-medium-gray)', marginBottom: 'var(--spacing-xxl)', maxWidth: '500px', margin: '0 auto var(--spacing-xxl)' }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <button className="btn-primary" onClick={() => navigate('/')}>
          Return Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
