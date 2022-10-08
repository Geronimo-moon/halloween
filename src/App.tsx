import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg"
import style from "./App.module.scss";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={style.app}>
      <div>
        <a href="https://vitejs.dev">
          <img src={viteLogo} className={style.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org">
          <img src={reactLogo} className={`${style.logo} ${style.react}`} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={style.card}>
        <button type="button" onClick={() => setCount((num) => num + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={style.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default App;
