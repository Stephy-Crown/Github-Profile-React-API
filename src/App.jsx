import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./components/Card";
import "./App.css";
// import Card from "./components/Card";
import CardList from "./components/CardList";
import Form from "./components/Form";

function App({ title }) {
  // const [count, setCount] = useState(0);
  const testData = [
    {
      name: "Dan Abramov",
      avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
      company: "@facebook",
    },
    {
      name: "Sophie Alpert",
      avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
      company: "Humu",
    },
    {
      name: "Sebastian Markbåge",
      avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
      company: "Facebook",
    },
  ];

  return (
    <>
      <div className="header font-bold text-3xl font-serif">{title}</div>
      <Form />
      <CardList testData={testData} className="mx-auto" />
    </>
  );
}

export default App;
