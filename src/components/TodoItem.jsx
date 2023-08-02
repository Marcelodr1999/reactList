import React from 'react';


function TodoItem({ todo, markComplete }) {

  return (
    <li>
      {todo.itemName} <input type="checkbox" checked={todo.completed} onChange={() => markComplete()} />
    </li>
  );
}

export default TodoItem
