import React, { useState } from 'react';

function To_do_input(props) {
  const { Add } = props;
  const [to_do, setTodo] = useState("");

  const eventHandler = e => {
    setTodo(e.target.value);
  }

  const Submit = () => {
    Add(to_do);
    setTodo("");
  }

  return (
    <div className="inputBox">
      <input 
        type="text" 
        placeholder='당신이 하고 싶은 일을 적어보세요.'
        name="title"
        value={to_do}
        onChange={ eventHandler }/>
      <div className="btn" onClick={ Submit }>등록하기</div>
    </div>
  );
}

export default To_do_input;