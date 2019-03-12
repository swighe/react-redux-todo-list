import React, { PureComponent } from 'react';

export default class Todo extends PureComponent {
    render = () => {
        console.log(this.props.isComplete)
        return (
            <div>{this.props.isComplete ? <strike> this.props.text </strike> : this.props.text}</div>
        )
    }
}