import { useEffect, useState } from "react";

const EditButton = ({ id, handleUpdate, prevValue }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [description, setDescription] = useState(prevValue);

  const onEdit = async () => {
    try {
      handleUpdate(id, description);
      const body = { description };
      const response = await fetch(`http://localhost:4000/api/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setModalOpen(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <button
        className="bg-yellow-300 px-2 rounded-sm"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Edit
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 ${
          modalOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-center h-full backdrop-blur-xs">
          <input
            type="text"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="bg-yellow-300 px-2 rounded-sm" onClick={onEdit}>
            Edit
          </button>
          <button
            className="bg-red-600 px-2 rounded-sm text-white"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default EditButton;
