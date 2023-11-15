import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { deleteTodo } from "../redux/todo/todoSlice";
import { useSelector, useDispatch } from "react-redux";

function ListItem({ text, color, id }) {
  console.log(text, color);
  const state = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(deleteTodo(id));
  }

  return (
    <div className="list-item" style={{ backgroundColor: color }}>
      <span>{text}</span>
      <button onClick={handleClick}>
        <BsFillTrashFill />
      </button>
    </div>
  );
}

export default React.memo(ListItem);
