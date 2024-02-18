import './App.css';
import { useState } from 'react';
function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
  const [validationError, setValidationError] = useState('');
  const [selectedButton, setSelectedButton] = useState('todo')

  // validation
  const validateToDo = () => {
    if (toDo.trim() !== '') {
      setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
      setToDo('');
    } else {
      setValidationError('Please enter a valid todo item.');
    }
  }
  // clear validation
  const clearValidation = () => {
    setValidationError('');
  }

  // complet a task
  const completeATask = (id) => {
    setToDos((prevToDos) => {
      const updatedToDos = prevToDos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      );
      console.log("Updated ToDos:", updatedToDos);
      return updatedToDos;
    });
  };

  // delete a task
const deleteATask = (id) => {
  setToDos((prevToDos) => {
    let updatedToDos = [...prevToDos];
    const findIndexToDelete = updatedToDos.findIndex((todo) => todo.id === id);

    if (findIndexToDelete !== -1) {
      updatedToDos.splice(findIndexToDelete, 1);
    }

    return updatedToDos;
  });
};

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  // ui
  return (
    <div className="app">
      <div className='toDoList'>
        <div className="mainHeading">
          <h1>ToDo List</h1>
          <h3 className='addTask'>Add Task</h3>
        </div>

        <div className="input">
          <input value={toDo} onChange={(e) => setToDo(e.target.value)} onClick={clearValidation} type="text" placeholder="🖊️ Add item..." />
          <i onClick={validateToDo} className="fas fa-plus"></i>
        </div>
        <span className='validationSpan'>{validationError}</span>

        <div>
          <button className={selectedButton === 'todo' ? 'selected' : ''} onClick={() => handleButtonClick('todo')}>ToDo</button>
          <button className={selectedButton === 'completed' ? 'selected' : ''} onClick={() => handleButtonClick('completed')}>Completed</button>
        </div>

        {/* to do tasks */}
        <div className="todos" style={{ display: selectedButton === 'todo' ? 'block' : 'none' }}>
          {toDos.map((value) => {
            return (
              <div className="todo">
                <div className="left">
                  <input value={value.status} onChange={() => completeATask(value.id)} type="checkbox" name="" id="" />
                  <p>{value.text}</p>
                </div>
                <div className="right">
                  <i className="fas fa-edit"></i>
                  <i className="fas fa-times dltIcon" onClick={() => deleteATask(value.id)}></i>
                </div>
              </div>)
          })}
        </div>

        {/* completed tasks */}
        <div className='completed' style={{ display: selectedButton === 'completed' ? 'block' : 'none' }}>

          {toDos.map((value) => {
            if (value.status) {
              return (
                <div className="completed-todo">
                  <div className="left">
                    <p>{value.text} </p>
                  </div>
                  <div className="right">
                    <i className="fas fa-circle-check"></i>
                  </div>
                </div>
              )
            } return null;
          })}
        </div>

      </div>
    </div>
  );
}

export default App;
