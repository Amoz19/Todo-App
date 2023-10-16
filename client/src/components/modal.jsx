import React from "react";

const Modal = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        className="bg-yellow-300 px-2 rounded-sm"
        onClick={handleOpen}
      >
        Open modal
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 ${open ? "block" : "hidden"}`}
      >
        <div className="flex items-center justify-center h-full backdrop-blur-xs">
          {children}
          <button
            className="bg-red-600 px-2 rounded-sm text-white"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;