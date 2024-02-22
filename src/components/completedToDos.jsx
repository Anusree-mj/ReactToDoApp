import React from 'react';

const CompletedTask = ({ completedTasks, showCompleted }) => {
  return (
    <div className='completed' style={{ display: showCompleted ? 'block' : 'none' }}>
      {completedTasks.map((value) => (
        <div className="completed-todo" key={value.id}>
          <div className="left">
            <p className='completedTxts'>{value.text} </p>
          </div>
          <div className="right">
            <i className="fas fa-circle-check"></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CompletedTask;
