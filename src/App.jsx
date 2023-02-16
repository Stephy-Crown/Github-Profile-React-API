import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./components/Card";
import "./App.css";
import Card from "./components/Card";

function App({ title }) {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="header font-bold text-3xl font-serif">{title}</div>
      <Card />;
    </>
  );
}

export default App;
