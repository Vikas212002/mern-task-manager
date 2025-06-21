import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onTaskAdded }) => {
  const [task, setTask] = useState({ title: '', description: '', assignedTo: '', status: 'todo' });

  const handleChange = e => setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('/api/tasks', task);
    setTask({ title: '', description: '', assignedTo: '', status: 'todo' });
    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
  <div className="mb-3">
    <input
      className="form-control"
      name="title"
      placeholder="Title"
      value={task.title}
      onChange={handleChange}
      required
    />
  </div>
  <div className="mb-3">
    <input
      className="form-control"
      name="description"
      placeholder="Description"
      value={task.description}
      onChange={handleChange}
    />
  </div>
  <div className="mb-3">
    <input
      className="form-control"
      name="assignedTo"
      placeholder="Assigned To"
      value={task.assignedTo}
      onChange={handleChange}
      required
    />
  </div>
  <div className="mb-3">
    <select
      className="form-select"
      name="status"
      value={task.status}
      onChange={handleChange}
    >
      <option value="todo">Todo</option>
      <option value="inProgress">In Progress</option>
      <option value="done">Done</option>
    </select>
  </div>
  <button type="submit" className="btn btn-primary">Add Task</button>
</form>

  );
};

export default TaskForm;
