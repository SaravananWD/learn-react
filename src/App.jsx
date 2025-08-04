import React from "react";
import Button from "./components/Button";
import Intro from "./components/Intro";

export default function App() {
  const [isToggle, setIsToggle] = React.useState(false);

  return (
    <div>
      {isToggle === true ? (
        <Intro>{BODY}</Intro>
      ) : (
        <Intro>
          <Button setIsToggle={setIsToggle} />
        </Intro>
      )}
    </div>
  );
}

const BODY = (
  <>
    <h1>Hey there!</h1>
    <p>Wait some more time for an awesome content.</p>
  </>
);
