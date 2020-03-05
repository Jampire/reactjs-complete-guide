import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Den', age: 35},
            {name: 'Arsen', age: 24},
            {name: 'Denis', age: 29},
        ],
        showPersons: false
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

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi, I'm here</h1>
                <button
                    style={style}
                    onClick={this.togglePersonHandler}>Toggle Persons</button>
                {this.state.showPersons ?
                    <div>
                        <Person
                            name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                        <Person click={this.switchNameHandler.bind(this, 'Arsen!')}
                                name={this.state.persons[1].name} age={this.state.persons[1].age}
                                changed={this.nameChangedHandler}>Hobbies: Laziness</Person>
                        <Person
                            name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                    </div> : null
                }
            </div>
        );
    }
}

export default App;
