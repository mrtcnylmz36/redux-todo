import React, { useState } from "react";
import { addTodo, getTodo } from "../redux/todo/todoSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Form() {
  const [checkColor, setCheckColor] = useState("#AED581");
  const [text, setText] = useState("");
  const colors = ["#AED581", "#4FC3F7", "#FFD54F"];

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        text: text,
        color: checkColor,
      })
    );
    setText("");
  };

  const handleChange = (e) => {
    setCheckColor(e.target.id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <div>
          <textarea
            name="text"
            cols="30"
            rows="6"
            placeholder="Todo Girin"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="colors-container">
          {colors.map((color, i) => (
            <div
              key={i}
              style={{ backgroundColor: color }}
              className="colorDiv"
              id={color}
              onClick={handleChange}
            >
              {checkColor === color && <span> &#10004;</span>}
            </div>
          ))}
        </div>
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default React.memo(Form);
