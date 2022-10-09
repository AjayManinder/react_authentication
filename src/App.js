import "./App.css";
import React from "react";
import "./components/LogSing.css";
import RouterMap from "./components/Router";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-header"> */}
          <RouterMap />
        </div>
      // </div>
    );
  }
}
