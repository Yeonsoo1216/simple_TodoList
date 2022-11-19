import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import TodoInput from './components/ToDoInput';
import TodoItem from './components/ToDoItem';

function App() {
  const [Todo, setTodo] = useState([]);

  const AddTo_do = (title) => {
    setTodo([...Todo, { "title" : title, success : false }]);
  }

  const Success = (idx) => {
    const list = [...Todo];

    list[idx].success = true;
    
    setTodo(list);
  }

  const Remove = (idx) => {
    const list = [...Todo];
    
    list.splice(idx, 1);

    setTodo(list);
  }

  return (
    <div className='background'>
      <div className="note">
        <Title title="TODOLIST" />
        <TodoInput Add={ AddTo_do } />

        <div className="todolist">
          {Todo.map((v, i) => (
            <TodoItem key={ i } data={ v } idx={i} Success={ Success } Remove={ Remove } />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;