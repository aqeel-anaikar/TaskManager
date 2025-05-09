// filepath: src/components/TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, toggleTask, deleteTask, editTask }) => {
  return (
    <ul className="task-list">
      {tasks.length > 0 ? (
        tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      ) : (
        <div className="no-tasks">No tasks available</div>
      )}
    </ul>
  );
};

export default TaskList;