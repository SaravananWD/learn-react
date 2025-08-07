import React from "react";
import space from "../utils/space";

function Button({ type, children }) {
  const style = { marginBottom: space(5) };
  const className = `btn ${type}`;
  return (
    <button style={style} className={className}>
      {children}
    </button>
  );
}
export default Button;
