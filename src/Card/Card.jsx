import React, {Component} from 'react';
import './Card.scss';

class Card extends Component {
    state = {checked: false};

    checkBoxHandler = () => {
        this.setState({checked: !this.state.checked});
    };

    render() {
        return (
            <div className={`card mb-3 my-4${this.state.checked ? ' border-success' : ''}`}>
                <div className='card-header'>
                    <span className='float-left'>{this.props.header}</span>
                    <label className='float-right'>
                         <input type='checkbox' onClick={this.checkBoxHandler} defaultChecked={this.state.checked}/>
                    </label>
                </div>
                <div className={`card-body${this.state.checked ? ' text-success' : ''}`}>
                    <h5 className='card-title'>{this.props.title}</h5>
                    <p className='card-text text-justify'>{this.props.content}</p>
                </div>
            </div>
        );
    }
}

export default Card;
