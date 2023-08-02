import { useState } from 'react'
import TodoList from './TodoList';
function TodoApp() {

    const initList = [
        {
          itemName: 'Take out trash',
          completed: false,
        },
        {
          itemName: 'Buy Groceries',
          completed: false,
        },
      ];


    const[list, setList] = useState(initList);
    const[itemName, setItemName] = useState('');


function addItem(e){
    setItemName(e.target.value)
}

function addList(){
    const newList = list.concat({
        itemName,
        completed: false,
    });
    setList(newList);
    setItemName('');
}


function markComplete(index) {
  const updatedList = [...list];
  updatedList[index].completed = !updatedList[index].completed;
  setList(updatedList);
}

const remainingCount = list.filter((item) => !item.completed).length;


  return (
    <>
    <div>
      <div>
        <h2>Add items to the list</h2>
          <input value= {itemName} onChange={addItem}></input>
          <button onClick={addList}>Add Item</button>
          <h2>Remaining list items: {remainingCount}</h2>
          <p>Check the box to mark as complete</p>
      </div>
      <TodoList todos={list} markComplete={markComplete} />
    </div>
    </>
  )
}

export default TodoApp
