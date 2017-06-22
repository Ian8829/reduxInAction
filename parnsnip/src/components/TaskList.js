import React from 'react';
import Task from './Task';

export default function TaskList(props) {
  return(
    <div className="task-list">
      <div className="task-list-title">
        <strong>{props.status}</strong>
      </div>
      {this.props.tasks.map(task => (
        <Task key={task.id} task={task}/>
      ))}
    </div>
  );
}