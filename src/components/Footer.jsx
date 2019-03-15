import React from 'react';
import VisibilityFilter from '../container/VisibilityFilter';

const Footer = () => {
    const renderVisibilityFilter = (filter, label) => <VisibilityFilter filter={filter} label={label} />
    return (
        <div>
            {renderVisibilityFilter('COMPLETED', 'completed')}
            {renderVisibilityFilter('INCOMPLETE', 'incomplete')}
            {renderVisibilityFilter('SHOW_ALL', 'show all')}
        </div>
        )
}

export default Footer