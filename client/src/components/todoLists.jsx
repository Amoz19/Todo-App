import { useEffect, useState } from "react";
import Todos from "./todos";
import TodoInput from "./todoInput";

const TodoLists = () => {
  const [todoLists, setTodoLists] = useState([]);
  console.log(todoLists);

  const handleAdd = (newItem) => {
    setTodoLists([...todoLists, newItem]);
  };

  const handleDelete = (updateId) => {
    setTodoLists(todoLists.filter((todo) => todo._id != updateId));
  };

  const handleUpdate = (updateId, updateDescription) => {
    const updatedTodo = todoLists.map((todo) => {
      if (todo._id === updateId) {
        return { ...todo, description: updateDescription };
      }
      return todo;
    });

    setTodoLists(updatedTodo);
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:4000/api");
      const todos = await response.json();
      setTodoLists(todos);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <>
      <TodoInput handleAdd={handleAdd} />
      <Todos
        todoLists={todoLists}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </>
  );
};

export default TodoLists;
