import React, {Component} from 'react';

class InputText extends Component {
    render() {
        return (
            <span>
                <div className={`${this.props.penActivated ? 'd-none' : 'd-block'}`}>{this.props.value}</div>
                <div className={`${this.props.penActivated ? 'd-block' : 'd-none'} fa-xs`}>
                    <input type='text' maxLength={this.props.maxLength} value={this.props.value}
                           onChange={this.props.handler.bind(this, this.props.fieldName)}/>
                </div>
            </span>
        );
    }
}

export default InputText;
