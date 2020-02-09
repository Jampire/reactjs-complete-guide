import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

// function App() {
// class App extends Component {
const App2 = props => {
    const [personState, setPersonState] = useState({
        persons: [
            {name: 'Den', age: 35},
            {name: 'Arsen', age: 24},
            {name: 'Denis', age: 29},
        ]
    });

    const switchNameHandler = (newName) => {
        setPersonState({
            persons: [
                {name: 'Den!!!', age: 35},
                {name: newName, age: 24},
                {name: 'Denis', age: 19},
            ]
        });
    };

    const [keyState, setKeyState] = useState('some other value');

    console.log(personState, keyState);

    return (
        <div className="App">
            <h1>Hi, I'm here</h1>
            <button onClick={() => switchNameHandler('Arsen?')}>Switch the name</button>
            <Person
                name={personState.persons[0].name} age={personState.persons[0].age}/>
            <Person click={switchNameHandler.bind(this, 'Arsen!')}
                name={personState.persons[1].name} age={personState.persons[1].age}>Hobbies: Laziness</Person>
            <Person
                name={personState.persons[2].name} age={personState.persons[2].age}/>
        </div>
    );
};

export default App2;
