import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import List from "./components/List/List.jsx";

import "./App.css";
const testEntryList = [
  { name: "test entry 1", date: "test date" },
  { name: "test entry 2", date: "test date" },
  { name: "test entry 3", date: "test date" }
]
function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  // setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <div className="root">
      <div className="header">
        <h1>XDWY</h1>
        <p>X days without Y</p>
      </div>

      <List entryList={testEntryList} />

      {/* <h1>Welcome to alfa Tauri!</h1> */}
      {/* 
      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}

      {/* <p>Click on the Tauri, Vite, and React logos to learn more.</p> */}

      {/* <div className="row">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="submit">Greet</button>
        </form>
      </div> */}

      {/* <p>{greetMsg}</p> */}
    </div>
  );
}

export default App;
