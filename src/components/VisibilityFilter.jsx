import React, { PureComponent } from 'react';
import FilterLink from "./FilterLink";

export default class VisibilityFilter extends PureComponent {
    render = () => {
        const {onClick, currentVisibilityFilter} = this.props
        const isCurrent = (visibilityFilter) => currentVisibilityFilter === visibilityFilter

        const renderFilterLink = (filter, label) => <FilterLink onClick={() => {return onClick(filter)}} isCurrent={isCurrent(filter)}>{label}</FilterLink>

        return (
            <div>
                {renderFilterLink('COMPLETED', 'completed')}
                {renderFilterLink('INCOMPLETE', 'incomplete')}
                {renderFilterLink('SHOW_ALL', 'show all')}
            </div>
        )
    }
}