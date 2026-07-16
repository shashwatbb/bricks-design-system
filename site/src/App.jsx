import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Documentation from './components/Documentation';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('intro');

  return (
    <div className="app-container">
      <div className="background-glow"></div>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Documentation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
