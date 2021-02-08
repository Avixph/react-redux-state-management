import "./App.css";
import React from "react";
import { useSelector } from "react-redux";

function App() {
  const birds = useSelector((state) => state.birds);
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Bird List</h1>
        <form>
          <label>
            <p>Add Birds</p>
            <input type="text" />
          </label>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
        <ul>
          {birds.map((bird) => (
            <li key={bird.name}>
              <h3>{bird.name}</h3>
              <div>views: {bird.views}</div>
              <button>
                <span role="img" arial-label="add">
                  +
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
