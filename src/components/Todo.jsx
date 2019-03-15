import React, { PureComponent } from 'react';

export default class Todo extends PureComponent {
    render = () => {
        console.log(this.props)
        return (
            <div onClick={() => {this.props.onClick(this.props.id)}}>
                {this.props.isComplete ? <strike> {this.props.text} </strike> : this.props.text}
            </div>
        )
    }
}