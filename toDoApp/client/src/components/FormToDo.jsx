import React from "react";
import { useState } from "react";

const FormToDo = (props) => {
  const { handleAddItem } = props;
  const [description, setDescription] = useState("");

  const handleSetDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description,
    });
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-list">
        <div className="file-input">
          <input
            type="text"
            className="text"
            value={description}
            onChange={(e) => handleSetDescription(e)}
          />
          <button
            className="button pink"
            disabled={description ? "" : "disabled"}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormToDo;
