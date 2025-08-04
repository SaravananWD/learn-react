import React from "react";

function Button({ setIsToggle }) {
  return <button onClick={() => setIsToggle(true)}>Reveal Intro</button>;
}
export default Button;
