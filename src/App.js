import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Den', age: 35},
            {name: 'Arsen', age: 24},
            {name: 'Denis', age: 29},
        ]
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: 'Den!!!', age: 35},
                {name: newName, age: 24},
                {name: 'Denis', age: 19},
            ]
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Den!!!', age: 35},
                {name: event.target.value, age: 24},
                {name: 'Denis', age: 29},
            ]
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm here</h1>
                <button onClick={() => this.switchNameHandler('Arsen?')}>Switch the name</button>
                <Person
                    name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person click={this.switchNameHandler.bind(this, 'Arsen!')}
                        name={this.state.persons[1].name} age={this.state.persons[1].age}
                        changed={this.nameChangedHandler}>Hobbies: Laziness</Person>
                <Person
                    name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;
