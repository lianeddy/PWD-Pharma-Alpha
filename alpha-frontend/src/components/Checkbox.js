import React from "react";

const Checkbox = (props) => {
  return (
    <li>
      <input
        key={props.id}
        onChange={() => props.handleisChecked(props.id)}
        type="checkbox"
        id={props.id}
        checked={props.isChecked}
        value={props.value}
      />
    </li>
  );
};

export default Checkbox;
