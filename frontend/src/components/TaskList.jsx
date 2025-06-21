import React, { useState } from 'react';
import axios from 'axios';

const TaskList = ({ tasks, onTaskUpdated, onTaskDeleted }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedTask, setEditedTask] = useState({});

  const startEdit = task => {
    setEditingId(task._id);
    setEditedTask({ ...task });
  };

  const handleChange = e => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const saveEdit = async () => {
    await axios.put(`/api/tasks/${editingId}`, editedTask);
    setEditingId(null);
    onTaskUpdated();
  };

  const cancelEdit = () => setEditingId(null);

  const deleteTask = async id => {
    await axios.delete(`/api/tasks/${id}`);
    onTaskDeleted();
  };

  return (
    <div>
      {tasks.map(task => (
  <div key={task._id} className="card mb-3">
    <div className="card-body">
      {editingId === task._id ? (
        <>
          <input
            className="form-control mb-2"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
          />
          <input
            className="form-control mb-2"
            name="description"
            value={editedTask.description}
            onChange={handleChange}
          />
          <input
            className="form-control mb-2"
            name="assignedTo"
            value={editedTask.assignedTo}
            onChange={handleChange}
          />
          <select
            className="form-select mb-2"
            name="status"
            value={editedTask.status}
            onChange={handleChange}
          >
            <option value="todo">Todo</option>
            <option value="inProgress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <button onClick={saveEdit} className="btn btn-success me-2">Save</button>
          <button onClick={cancelEdit} className="btn btn-secondary">Cancel</button>
        </>
      ) : (
        <>
          <h5 className="card-title">{task.title}</h5>
          <p className="card-text">{task.description}</p>
          <p className="mb-1"><strong>Assigned To:</strong> {task.assignedTo}</p>
          <p className="mb-2"><strong>Status:</strong> {task.status}</p>
          <button onClick={() => startEdit(task)} className="btn btn-outline-primary me-2">Edit</button>
          <button onClick={() => deleteTask(task._id)} className="btn btn-outline-danger">Delete</button>
        </>
      )}
    </div>
  </div>
))}

    </div>
  );
};

export default TaskList;
