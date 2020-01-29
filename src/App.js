import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

//function App() {
class App extends Component {
    state = {
        persons: [
            {name: 'Den', age: 35},
            {name: 'Arsen', age: 24},
            {name: 'Denis', age: 29},
        ]
    };

    switchNameHandler = () => {
        this.setState({
            persons: [
                {name: 'Den!!!', age: 35},
                {name: 'Arsen', age: 24},
                {name: 'Denis', age: 19},
            ]
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm here</h1>
                <button onClick={this.switchNameHandler}>Switch the name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Laziness</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;
