import React from "react";
import Header from "./components/Header";
import MemberList from "./components/Member";
import BottomLeft from "./components/BottomLeft";
import BottomRight from "./components/BottomRight";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <MemberList />
      <BottomLeft />
      <BottomRight/>
    </div>
  );
}

export default App;
