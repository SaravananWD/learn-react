import React from "react";
import ToggleButton from "./components/ToggleButton";
import Button from "./components/Button";
import Intro from "./components/Intro";
import { preinitModule } from "react-dom";

export default function App() {
  const [isToggle, setIsToggle] = React.useState(false);

  return (
    <div>
      {isToggle === true ? (
        <Intro>
          <ToggleButton isToggle={isToggle} setIsToggle={setIsToggle} />
          {BODY}
        </Intro>
      ) : (
        <Intro>
          <ToggleButton isToggle={isToggle} setIsToggle={setIsToggle} />
        </Intro>
      )}
    </div>
  );
}

const BODY = (
  <>
    <h1>Hey there!</h1>
    <p>Wait some more time for an awesome react content.</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum
      iste nihil ab totam corrupti quidem. Molestiae, cumque omnis fugit, id
      aliquam nisi voluptate, ea et similique mollitia harum assumenda!
    </p>
    <Button type={"primary"}>Get started!</Button>
    <h2>Lorem ipsum dolor sit amet consectetur</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum
      iste nihil ab totam corrupti quidem. Molestiae, cumque omnis fugit, id
      aliquam nisi voluptate, ea et similique mollitia harum assumenda!
    </p>
    <h3>Lorem ipsum dolor sit amet consectetur</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum
      iste nihil ab totam corrupti quidem. Molestiae, cumque omnis fugit, id
      aliquam nisi voluptate, ea et similique mollitia harum assumenda!
    </p>
    <h4>Lorem ipsum dolor sit amet consectetur</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum
      iste nihil ab totam corrupti quidem. Molestiae, cumque omnis fugit, id
      aliquam nisi voluptate, ea et similique mollitia harum assumenda!
    </p>
    <h5>Lorem ipsum dolor sit amet consectetur</h5>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum
      iste nihil ab totam corrupti quidem. Molestiae, cumque omnis fugit, id
      aliquam nisi voluptate, ea et similique mollitia harum assumenda!
    </p>
    <h6>Lorem ipsum dolor sit amet consectetur</h6>
  </>
);
