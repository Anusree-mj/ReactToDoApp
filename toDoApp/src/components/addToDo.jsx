import React, { useState } from 'react';

const AddTodo = ({ onAddTodo }) => {
  const [toDo, setToDo] = useState('');
  const [validationError, setValidationError] = useState('');

  const validateAndAddTodo = () => {
    if (toDo.trim() !== '') {
      onAddTodo(toDo);
      setToDo('');
      setValidationError('');
    } else {
      setValidationError('Please enter a valid todo item.');
    }
  };

  const clearValidation = () => {
    setValidationError('');
  };

  return (
    <div>
      <div className="mainHeading">
        <h1>ToDo List</h1>
        <h3 className='addTask'>Add Task</h3>
      </div>

      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} onClick={clearValidation} type="text" placeholder="🖊️ Add item..." />
        <i onClick={validateAndAddTodo} className="fas fa-plus"></i>
      </div>

      <span className='validationSpan'>{validationError}</span>
    </div>
  );
};

export default AddTodo;