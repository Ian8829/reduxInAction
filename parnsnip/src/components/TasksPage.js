import React, { Component } from 'react';
import TaskList from './TaskList';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

class TasksPage extends Component {
  render() {
    const { tasks } = this.props;

    return(
      <div className="tasks">
        <div className="task-lists">
          {TASK_STATUSES.map(status => {
            const tasks = tasks.filter(task => task.status === status);
            return(
              <TaskList
                key={status}
                status={status}
                tasks={tasks}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default TasksPage;
