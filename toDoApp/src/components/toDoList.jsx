import React from 'react';

const ToDoList = ({ toDos, completeATask, deleteATask, getUpdateToDo, selectedButton }) => {
  return (
    <>
      {/* to do tasks */}
      <div className="todos" style={{ display: selectedButton === 'todo' ? 'block' : 'none' }}>
        {toDos.map((value) => (
          <div className="todo" key={value.id}>
            <div className="left">
              <input
                checked={value.status}
                onChange={() => completeATask(value.id)}
                type="checkbox"
                className='C'
              />
              <p>{value.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-edit" onClick={() => getUpdateToDo(value.id)}></i>
              <i className="fas fa-times dltIcon" onClick={() => deleteATask(value.id)}></i>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ToDoList;
