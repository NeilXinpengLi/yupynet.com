import React from 'react';
import riotIcon from '../images/Rioticon.webp'; 

const BottomRight = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '12px',
        right: '12px',
        textAlign: 'center',
        zIndex: 1000,
        userSelect: 'none',
      }}
    >
      <img
        src={riotIcon}
        alt="Riot Icon"
        style={{
          width: '40px',
          height: '40px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '4px',
        }}
      />
      <div
        style={{
          fontWeight: '500',
          fontSize: '12px',
          color: '#333',
        }}
      >
        Free u3u
      </div>
    </div>
  );
};

export default BottomRight;
