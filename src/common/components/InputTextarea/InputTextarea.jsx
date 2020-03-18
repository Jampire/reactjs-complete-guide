import React, {Component} from 'react';

class InputTextarea extends Component {
    renderText() {
        const style = {
            whiteSpace: 'pre'
        };

        return <div className='d-block' style={style}>{this.props.value}</div>;
    }

    renderInput() {
        return (
            <div className='d-block fa-xs'>
                <textarea value={this.props.value} rows={this.props.rows} cols={this.props.cols}
                          onChange={event => this.props.handler(this.props.fieldName, event)}/>
            </div>
        );
    }

    render() {
        let render = this.props.isEdit ? this.renderInput() : this.renderText();

        return (
            <span>{render}</span>
        );
    }
}

export default InputTextarea;
