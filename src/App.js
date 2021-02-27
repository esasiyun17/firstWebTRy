import React from 'react';
import './App.css';
import Bottom from './Bottom';
import Intro from './Intro';
import Navi from './Navi';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Intro/>
      <Bottom/>
    </div>
  );
}

export default App;
