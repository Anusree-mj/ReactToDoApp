import React, { useState } from 'react';

const ToDoList = ({ toDos, completeATask, deleteATask, selectedButton, updateTodo }) => {

  const [editToDo, SetEditingToDo] = useState('');
  const [editedText, SetEditedText] = useState('');

  const getUpdateToDo = (id) => {
    SetEditingToDo(id)
  }
 
  const editText = (text) => {
    SetEditedText(text);
  }
 const updated = ()=>{
  SetEditingToDo('');
  SetEditedText('')
 }
  return (
    <>
      {/* to do tasks */}
      <div className="todos" style={{ display: selectedButton === 'todo' ? 'block' : 'none' }}>
        {toDos.map((value) => (
          <div className="todo" key={value.id}>
            <div className="left">
              {value.id === editToDo ? (
                <>
                  <input className='editToDo' placeholder={value.text} onChange={(e) => editText(e.target.value)} value={editedText} />
                </>
              ) : (
                <>
                  <input
                    checked={value.status}
                    onChange={() => completeATask(value.id)}
                    type="checkbox"
                    className='C'
                  />
                  <p>{value.text}</p>
                </>
              )}
            </div>
            <div className="right">
              {value.id === editToDo ? (
                <>
<i className="fas fa-check" onClick={() => { console.log(`Clicked on check icon for todo with id ${value.id} and text ${editedText}`); updateTodo(value.id, editedText); updated() }}></i>
                </>
              ) : (
                <>
                  <i className="fas fa-edit" onClick={() => getUpdateToDo(value.id, value.text)}></i>
                  <i className="fas fa-times dltIcon" onClick={() => deleteATask(value.id)}></i>
                </>
              )}
            </div>
          </div>
        ))}
      </div >
    </>
  );
}

export default ToDoList;
