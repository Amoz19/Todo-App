import EditButton from "./editButton";
// import {useState} from 'react';

const Todos = ({ todoLists, handleDelete, handleUpdate }) => {
  const deleteTodo = async (id) => {
    handleDelete(id);
    try {
      const deleteTodo = await fetch(`http://localhost:4000/api/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="space-y-2 w-2/3">
      {todoLists.length ? (
        <table className="table-auto bg-blue-50 w-full">
          <thead className="bg-slate-200">
            <tr>
              <th>Description</th>
              <th>Edit </th>
              <th>Done</th>
            </tr>
          </thead>
          {todoLists.map((todo) => {
            return (
              <tbody key={todo._id}>
                <tr className="border-b-2 text-center">
                  <td>{todo.description}</td>
                  <td>
                    <EditButton
                      id={todo._id}
                      prevValue={todo.description}
                      handleUpdate={handleUpdate}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => deleteTodo(todo._id)}
                      className="bg-red-500 px-2 rounded text-white"
                    >
                      Done
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      ) : (
        <p className="text-center text-blue-800">Well done!</p>
      )}
    </div>
  );
};

export default Todos;
