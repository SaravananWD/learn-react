import React from "react";

function Button({ isToggle, setIsToggle }) {
  return (
    <button
      onClick={() => {
        const nextToggle = !isToggle;
        setIsToggle(nextToggle);
      }}
    >
      Toggle Intro
    </button>
  );
}
export default Button;
