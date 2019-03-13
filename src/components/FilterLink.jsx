import React, { PureComponent } from 'react';

export default class FilterLink extends PureComponent {
    render = () => {
        return (
            <a href='#' onClick={this.props.onClick}>{' ' + this.props.children}</a>
        )
    }
}