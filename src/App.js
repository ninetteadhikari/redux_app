import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import StarWars from './components/starWars/starWars'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>redux</h1>
      <StarWars/>
      </div>
    </Provider>
  );
}

export default App;
