import React from "react";
import Button from "./components/Button";
import Intro from "./components/Intro";

export default function App() {
  const [isToggle, setIsToggle] = React.useState(false);

  return (
    <div>
      {isToggle === true ? (
        <Intro>
          <Button isToggle={isToggle} setIsToggle={setIsToggle} />
          {BODY}
        </Intro>
      ) : (
        <Intro>
          <Button isToggle={isToggle} setIsToggle={setIsToggle} />
        </Intro>
      )}
    </div>
  );
}

const BODY = (
  <>
    <h1>Hey there!</h1>
    <p>Wait some more time for an awesome content.</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum
      iste nihil ab totam corrupti quidem. Molestiae, cumque omnis fugit, id
      aliquam nisi voluptate, ea et similique mollitia harum assumenda!
    </p>
  </>
);
