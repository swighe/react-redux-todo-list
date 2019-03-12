import React, { PureComponent } from 'react';

export default class VisibilityFilter extends PureComponent {
    render = () => {
        return (
            <div>
                <button onClick={() => { return this.props.onClick('COMPLETED')}}>Completed</button>
                <button onClick={() => { return this.props.onClick('INCOMPLETE')}}>Todo</button>
                <button onClick={() => { return this.props.onClick('SHOW_ALL')}}>Show All</button>
            </div>
        )
    }
}