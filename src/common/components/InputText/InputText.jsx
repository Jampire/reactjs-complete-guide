import React, {Component} from 'react';

class InputText extends Component {
    renderText() {
        return <div className='d-block'>{this.props.value}</div>;
    }

    renderInput() {
        return (
            <div className='d-block fa-xs'>
                <input type='text' maxLength={this.props.maxLength} value={this.props.value}
                       onChange={event => this.props.handler(this.props.fieldName, event)}/>
            </div>
        );
    }

    render() {
        return (
            <span>
                {this.props.isEdit ? this.renderInput() : this.renderText()}
            </span>
        );
    }
}

export default InputText;
