import React, {Component} from 'react';

class InputTextarea extends Component {
    render() {
        return (
            <span>
                <div className={`${this.props.penActivated ? 'd-none' : 'd-block'}`}>{this.props.value}</div>
                <div className={`${this.props.penActivated ? 'd-block' : 'd-none'} fa-xs`}>
                    <textarea value={this.props.value} rows={this.props.rows} cols={this.props.cols}
                           onChange={this.props.handler.bind(this, this.props.fieldName)}/>
                </div>
            </span>
        );
    }
}

export default InputTextarea;
