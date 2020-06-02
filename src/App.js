import React, {Component} from 'react';
import './App.scss';
import Header from './Header';
import Card from './Card/Card';

class App extends Component {
    state = {
        boxChecked: true
    };

    checkBoxHandler = () => {
        const checkState = this.state.boxChecked;
        this.setState({
            boxChecked: !checkState
        });
    };

    toggleHandler = f => {
        f();
    };

    render() {
        const arr = Array.from({length: 8}, (_, i) => `${++i}`).map(v => {
            return {
                id: v,
                value: v
            };
        });
        const cards = (
            <div className="row">
                {arr.map(v => {
                    return (
                        <div className="col-md-4" key={v.id}>
                            <Card
                                header={"Card Header " + v.value}
                                title={"Card Title " + v.value}
                                content={"Card Content " + v.value}
                                mainToggle={this.state.boxChecked}
                                onToggle={this.toggleHandler}
                            />
                        </div>
                    );
                })}
            </div>
        );

        return (
            <div className="App">
                <Header title="Dzianis's Awesome ReactJS Course"/>
                <div className="container">
                    <div className="form-check custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="mainToggle"
                            checked={this.state.boxChecked}
                            onChange={this.checkBoxHandler} />
                        <label className="form-check-label" htmlFor="mainToggle">
                            Read Only
                        </label>
                    </div>
                    {cards}
                </div>
            </div>
        );
    }
}

export default App;
