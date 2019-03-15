import React, { PureComponent } from 'react';

export default class FilterLink extends PureComponent {
    render = () => {
        console.log("FilterLink called with props: " + this.props.isCurrent)
        if (this.props.isCurrent)
            return (<span>{this.props.label}</span>)

        return (
            <a href='#' onClick={
                e => {
                    e.preventDefault();
                    this.props.onClick()
                }
            }>
                {'  ' + this.props.label}
            </a>
        )
    }
}