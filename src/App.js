import React from 'react';
import './App.css';
import Header from './Header';
import Card from './Card/Card';

function App() {
  return (
    <div className="App">
      <Header title="Dzianis's Awesome ReactJS Course"/>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Card header="Card Header" title="Card Title" content="Card Content"/>
                </div>
            </div>
        </div>

    </div>
  );
}

export default App;
