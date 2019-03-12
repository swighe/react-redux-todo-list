import React, { PureComponent } from 'react';

export default class AddTodo extends PureComponent {
    onSubmit = (e) => {
        if(e) e.preventDefault();
        this.props.onClick(this.input.value)
    }

    render = () => {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' placeholder='Enter Todo' ref={(element) => { this.input = element }} />
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}