import React from 'react';

const FilterTasks = ({ setFilter }) => {
    return (
     <div className="filter-tasks">
     <button onClick={() => setFilter('all')}>All</button>
     <button onClick={() => setFilter('completed')}>Completed</button>
     <button onClick={() => setFilter('pending')}>Pending</button>
     </div>
     );
};

export default FilterTasks;
