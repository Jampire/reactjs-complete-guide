import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm here</h1>
      <Person name="Den" age="35" />
      <Person name="Arsen" age="24">Hobbies: Laziness</Person>
      <Person name="Denis" age="29" />
    </div>
  );
}

export default App;
