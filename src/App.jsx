import React from "react";
import Button from "./components/Button";
import Intro from "./components/Intro";

export default function App() {
  const [isToggle, setIsToggle] = React.useState(false);

  return (
    <div>
      {isToggle === true ? <Intro /> : <Button setIsToggle={setIsToggle} />}
    </div>
  );
}
