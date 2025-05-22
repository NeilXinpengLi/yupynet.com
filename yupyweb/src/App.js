import React from 'react';
import BottomLeft from './components/BottomLeft';
import BottomRight from './components/BottomRight';
import Caomei from './components/caomei';
import Members from './components/members';



function App() {
  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', position: 'relative' }}>
      {/* 你的页面内容 */}



      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>YupyNet</h1>
      <Caomei />
      <Members />
      <BottomRight />
      <BottomLeft />
    </div>
  );
}

export default App;
