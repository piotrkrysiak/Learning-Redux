import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { decrement, increment } from "./testReducer";

export default function Sandbox() {
  const dispach = useDispatch();
  const { data } = useSelector((state) => state.test);

  return (
    <div>
      <h1>Testing 123</h1>
      <h3>The data is: {data}</h3>
      <Button
        onClick={() => dispach(increment(20))}
        content="Increment"
        color="green"
      />
      <Button
        onClick={() => dispach(decrement(10))}
        content="Decrement"
        color="red"
      />
    </div>
  );
}
