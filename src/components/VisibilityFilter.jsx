import React, { PureComponent } from 'react';
import FilterLink from "./FilterLink";

export default class VisibilityFilter extends PureComponent {
    render = () => {
        return (
            <div>
                <FilterLink onClick={() => { return this.props.onClick('COMPLETED')}}>Completed</FilterLink>
                <FilterLink onClick={() => { return this.props.onClick('INCOMPLETE')}}>Todo</FilterLink>
                <FilterLink onClick={() => { return this.props.onClick('SHOW_ALL')}}>Show All</FilterLink>
            </div>
        )
    }
}