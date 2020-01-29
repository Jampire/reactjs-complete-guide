import React from 'react';
import './App.css';
import Header from './Header';
import Card from './Card/Card';

function App() {
  return (
    <div className="App">
      <Header title="Dzianis's Awesome ReactJS Course"/>
      <Card title="Card Title" content="Card Content"/>
    </div>
  );
}

export default App;
