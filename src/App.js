import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";

export class App extends Component {
  render() {
    return (
      <div
        style={{
          background: "#c9d6ff",
          background: "-webkit-linear-gradient(to right, #c9d6ff, #e2e2e2)",
          background: "linear-gradient(to right,  #c9d6ff, #e2e2e2)",
        }}
      >
        <Navbar />
        <News />
      </div>
    );
  }
}

export default App;
