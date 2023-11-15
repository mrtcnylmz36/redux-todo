import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "./ListItem";
import { getTodo } from "../redux/todo/todoSlice";

function List() {
  const state = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch, state]);

  return (
    <ul className="list-container">
      {state.map((item) => {
        return (
          <li key={item._id}>
            <ListItem text={item.text} color={item.color} id={item._id} />
          </li>
        );
      })}
    </ul>
  );
}

export default List;
