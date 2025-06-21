import React from 'react';

const Filter = ({ filters, setFilters }) => {
  const handleChange = e => setFilters({ ...filters, [e.target.name]: e.target.value });

  return (
    <div className="d-flex gap-2 mb-4">
  <select
    className="form-select w-auto"
    name="status"
    value={filters.status}
    onChange={handleChange}
  >
    <option value="">All Statuses</option>
    <option value="todo">Todo</option>
    <option value="inProgress">In Progress</option>
    <option value="done">Done</option>
  </select>
  <input
    className="form-control w-auto"
    name="assignedTo"
    placeholder="Filter by Assigned To"
    value={filters.assignedTo}
    onChange={handleChange}
  />
</div>

  );
};

export default Filter;
