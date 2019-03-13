import React, { PureComponent } from 'react';

export default class FilterLink extends PureComponent {
    render = () => {
        if (this.props.isCurrent)
            return (<span>{this.props.children}</span>)

        return (
            <a href='#' onClick={
                e => {
                    e.preventDefault();
                    this.props.onClick()
                }
            }>
                {'  ' + this.props.children}
            </a>
        )
    }
}