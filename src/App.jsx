import React, { useState } from 'react';
import "./App.css";

function App() {
  const [todolist, setTodolist] = useState([
    {
      key: 1, messeage: '자바스크립트'
    },
    {
      key: 2, messeage: '리액트배우기'
    },
  ]);

  const [text, setText] = useState('');

  const addButtonHandler = () => {
    const newText = {
      key: Date.now(),
      messeage: text 
    };

    setTodolist([...todolist, newText]);
    setText("")
  };

  return (
    <div>
      <div className='header'>
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <button onClick={addButtonHandler}>추가하기</button>
      <h1>Todo List</h1>
      </div>
    <div className='app-style'>
        {todolist.map((item)=>{
          return(
            <div className='component-style'>
            <div key={item.key}>
              {item.messeage}
            </div>
            </div>
          )
        })
        }
     
    </div>
    </div>
    
  );
}

export default App;
