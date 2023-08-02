import TodoItem from './TodoItem';

function TodoList({ todos, markComplete }) {

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} markComplete={() => markComplete(index)} />
      ))}
    </ul>
  );
}

export default TodoList
