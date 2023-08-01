import { useState } from 'react'

function TodoApp() {

    const initList = [
        {
          itemName: 'Take out trash',
        },
        {
          itemName: 'Buy Groceries',
        },
      ];


    const[list, setList] = useState(initList);
    const[itemName, setItemName] = useState('');
    const[count, setCount] = useState(list.length)


function addItem(e){
    setItemName(e.target.value)
}

function addList(){
    const newList = list.concat({
        itemName,
    });
    setList(newList)
}
function listSize(){
    count = list.length
    if(checkbox.current.checked){
        
    }
}


  return (
    <>
    <div>
    <div>
        <input value= {itemName} onChange={addItem}></input>
        <button onClick={addList}>Add Item</button>
        <p>Remaining list items: {count}</p>
    </div>
    <ul>
        {
            list.map((item)=> (
            
            <li>{item.itemName} <input ref = {checkbox} type="checkbox"></input></li>
        ))
        }
        </ul>
        </div>
    </>
  )
}

export default TodoApp
