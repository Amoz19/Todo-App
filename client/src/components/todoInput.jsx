import { useState } from "react";

const TodoInput = ({ handleAdd }) => {
  const [description, setDescription] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:4000/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        // Assuming the server responds with the newly created todo's id
        const newTodo = await response.json();

        // Call handleAdd with the new todo's id and description
        handleAdd(newTodo);

        // Reset the description input
        setDescription("");
      } else {
        console.error("Failed to create a new todo.");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit} className="mb-5">
        <input
          type="text"
          className="border-2"
          placeholder="Enter your to do"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-green-400 text-neutral-50 px-2 py-0.5 rounded-sm">
          Save
        </button>
      </form>
    </>
  );
};

export default TodoInput;
