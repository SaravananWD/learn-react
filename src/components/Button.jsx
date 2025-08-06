import React from "react";
import space from "../utils/space";

function Button({ type, children }) {
  const style = { marginBottom: space(5) };
  return (
    <button style={style} className={type}>
      {children}
    </button>
  );
}
export default Button;
