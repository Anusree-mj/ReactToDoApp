import '../App.css';
import { useState } from 'react';
import AddTodo from '../components/addToDo';
import ToDoList from '../components/toDoList';
import CompletedTask from '../components/completedToDos';

const ToDoWrapper=()=> {
  const [toDos, setToDos] = useState([]);
  const [selectedButton, setSelectedButton] = useState('todo')

  const addTodo = (todo) => {
    setToDos([...toDos, { id: Date.now(), text: todo, status: false }]);
  };


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

  // updated task
  const getUpdateToDo = (todo) => {

  }

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  // ui
  return (
    <div className="app">
      <div className='toDoList'>

        <AddTodo onAddTodo={addTodo} />

        <div>
          <button className={selectedButton === 'todo' ? 'selected' : ''} onClick={() => handleButtonClick('todo')}>ToDo</button>
          <button className={selectedButton === 'completed' ? 'selected' : ''} onClick={() => handleButtonClick('completed')}>Completed</button>
        </div>

        <ToDoList
          toDos={toDos}
          completeATask={completeATask}
          deleteATask={deleteATask}
          getUpdateToDo={getUpdateToDo}
          selectedButton={selectedButton}
        />

        {/* completed tasks */}
        <CompletedTask completedTasks={toDos.filter((value) => value.status)} showCompleted={selectedButton === 'completed'} />

      </div>
    </div>
  );
}

export default ToDoWrapper;
