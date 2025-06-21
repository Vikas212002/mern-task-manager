import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({ status: '', assignedTo: '' });

  const fetchTasks = async () => {
    const query = new URLSearchParams(filters).toString();
    const res = await axios.get(`/api/tasks?${query}`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, [filters]);

  return (
  <div className="container my-4">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2 className="mb-4 text-center">Task Manager</h2>
        <TaskForm onTaskAdded={fetchTasks} />
        <Filter filters={filters} setFilters={setFilters} />
        <TaskList tasks={tasks} onTaskUpdated={fetchTasks} onTaskDeleted={fetchTasks} />
      </div>
    </div>
  </div>
);


};

export default App;
