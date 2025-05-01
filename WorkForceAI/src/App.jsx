import React from 'react';
import Nav from './Components/Nav';
import VantaBackground from './Components/VantaBackground';

const App = () => {
  return (
    <div className="relative">
      <VantaBackground />
      <div className="relative z-10 text-white">
        <Nav />
        <div className="w-full h-screen  flex items-center justify-center">
          <h1 className="text-4xl font-bold">Welcome to WorkForceAI</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
