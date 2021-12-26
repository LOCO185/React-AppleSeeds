import React, { useState } from "react";

const SimpleTodo = () => {
  const [todos, setTodos] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]);

const clickHandler = (index) => {
  const newTodos = [...todos];
  newTodos[index].completed = !todos[index].completed;
  setTodos(newTodos);
};

return (
  <div>
    {todos.map((todo, index) => {
      return (
        <div key={todo.name}>
          {todo.name}
          <button onClick={() => clickHandler(index)}>
            {todo.completed ? "V" : "X"}
          </button>
        </div>
      );
    })}
  </div>
);
}
export default SimpleTodo;
// style={textDecoration: completed[index] ? "line-through" : ""}