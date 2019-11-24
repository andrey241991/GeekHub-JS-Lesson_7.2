import React from 'react';
import logo from './logo.svg';
import './App.css';
import SectionFirst from './component/SectionFirst/index'
import SectionSecond from './component/SectionSecond/index'

function App() {
  return (
    <div className="App">
      <SectionFirst/>
      <SectionSecond/>
    </div>
  );
}

export default App;
