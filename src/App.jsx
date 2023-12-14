import { useEffect, useState, useRef } from "react";
import "./App.css";
import { useThrottling } from "./useThrottling";

export default function App() {

  const throttle = useThrottling();

  function handleClick() {
    console.log("clicked");
  }

  return (
    <main>
      <button onClick={() => throttle(handleClick)}>click</button>{" "}
    </main>
  );
}
