import React from "react";

function ToggleButton({ isToggle, setIsToggle }) {
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
export default ToggleButton;
