import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <div className="list">
        <List />
      </div>
    </div>
  );
}

export default App;
