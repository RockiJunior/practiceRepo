//imports
import React from "react";
//components
import Checkbox from "./Checkbox";

const TaskList = (props) => {
  const { list, setList } = props;

  const onChangeStatus = (e) => {
    const { name, checked } = e.target;
    const updateList = list.map(el => ({
      ...el,
      done: el.id === name ? checked : el.done,
    }));
    setList(updateList);
  };

  const onClickRemoveItem = (e) => {
    const updateList = list.filter(el => !el.done);
    setList(updateList);
  };

  const handleCheck = list.map(el => (
    <Checkbox key={el.id} data={el} onChange={onChangeStatus} />
  ));

  return (
    <div className="todo-list">
      {list.length ? handleCheck : <p>No Tasks</p>}

      {list.length ? (
        <p>
          <button className="button blue" onClick={onClickRemoveItem}>
            Delete All Done
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;
