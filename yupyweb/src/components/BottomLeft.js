import React from 'react';

const BottomLeft = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '16px',
      left: '16px',
      backgroundColor: '#ffffff',
      padding: '12px',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
      fontSize: '13px',
      zIndex: 1000,
      textAlign: 'center',
      border: '1px solid #e0e0e0',
      userSelect: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // ✅ 让文字和按钮都居中
    }}>
      <div style={{
        marginBottom: '6px',
        fontWeight: '500',
        color: '#333',
        fontSize: '13px'
      }}>
        快和我们一起玩！
      </div>
      <a
        href="https://discord.gg/your-invite-code"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          backgroundColor: '#5865F2',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '13px',
          transition: 'background-color 0.3s, transform 0.2s',
          cursor: 'pointer',
          outline: 'none',
          userSelect: 'none',
        }}
        onMouseEnter={e => {
          e.target.style.backgroundColor = '#4752C4';
          e.target.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={e => {
          e.target.style.backgroundColor = '#5865F2';
          e.target.style.transform = 'translateY(0)';
        }}
      >
        加入Discord
      </a>
    </div>
  );
};

export default BottomLeft;
