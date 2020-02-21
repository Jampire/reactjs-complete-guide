import React, {Component} from 'react';
import './Card.scss';
import InputText from '../common/components/InputText/InputText';
import InputTextarea from '../common/components/InputTextarea/InputTextarea';

class Card extends Component {
    state = {
        header: this.props.header,
        title: this.props.title,
        content: this.props.content,
        oldHeader: this.props.header,
        oldTitle: this.props.title,
        oldContent: this.props.content,
        boxChecked: false,
        borderColorClass: '',
        textColorClass: '',
        isEdit: false
    };

    checkBoxHandler = (event) => {
        const checked = event.target.checked;
        this.setState({
            boxChecked: checked,
            borderColorClass: checked ? ' border-success' : '',
            textColorClass: checked ? ' text-success' : ''
        });
    };

    penHandler = () => {
        const isEdit = this.state.isEdit;
        this.setState({
            oldHeader: this.state.header,
            oldTitle: this.state.title,
            oldContent: this.state.content,
            boxChecked: false,
            isEdit: !isEdit,
            borderColorClass: isEdit ? '' : ' border-primary',
            textColorClass: isEdit ? '' : ' text-primary'
        });
    };

    updateHandler = (name, event) => {
        this.setState({
            [name]: event.target.value
        });
    };

    saveHandler = () => {
        this.penHandler();
    };

    cancelHandler = () => {
        this.setState({
            header: this.state.oldHeader,
            title: this.state.oldTitle,
            content: this.state.oldContent,
        }, function () {
            this.penHandler();
        });

    };

    renderReadOnly() {
        return (
            <span className='d-inline'>
                <span className='fa-stack fa-sm'>
                    <input type='checkbox' checked={this.state.boxChecked} onChange={this.checkBoxHandler}/>
                </span>
                <span className='fa-stack fa-sm' onClick={this.penHandler}>
                    <i className='fas fa-pen' />
                </span>
            </span>
        );
    }

    renderEdit() {
        return (
            <span className='d-inline'>
                <span className='fa-stack fa-sm' onClick={this.saveHandler}>
                    <i className='far fa-save' />
                </span>
                <span className='fa-stack fa-sm' onClick={this.cancelHandler}>
                    <i className='fas fa-times' />
                </span>
            </span>
        );
    }

    render() {
        return (
            <div className={`my-card card mb-3 my-4${this.state.borderColorClass}`}>
                <div className='card-header'>
                    <span className='float-left'>
                        <InputText isEdit={this.state.isEdit}
                                   value={this.state.header}
                                   maxLength={20}
                                   handler={this.updateHandler}
                                   fieldName={'header'} />
                    </span>
                    <span className='float-right'>
                        {this.state.isEdit ? this.renderEdit() : this.renderReadOnly()}
                    </span>
                </div>
                <div className={`card-body${this.state.textColorClass}`}>
                    <h5 className='card-title'>
                        <InputText isEdit={this.state.isEdit}
                                   value={this.state.title}
                                   maxLength={25}
                                   handler={this.updateHandler}
                                   fieldName={'title'} />
                    </h5>

                    <div className='card-text text-justify'>
                        <InputTextarea isEdit={this.state.isEdit}
                                       value={this.state.content}
                                       rows={3}
                                       cols={50}
                                       handler={this.updateHandler}
                                       fieldName={'content'} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
