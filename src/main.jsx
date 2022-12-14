import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// import { CallbckHook } from "./06-memos/CallbckHook";
// import { Padre } from "./07-tarea-memo/Padre";
// import { TodoApp } from "./08-reducer/TodoApp";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { MemoHook } from "./06-memos/MemoHook";
// import { Memorize } from "./06-memos/Memorize";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FormWithCustomHook } from "./02-useEffect/FormWIthCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { CounterCustomHook } from "./01-useState/CounterCustomHook";
// import { CounterApp } from "./01-useState/CounterApp";
// import { HooksApp } from "./HooksApp";
// import "./08-reducer/intro-reducer";
import { MainApp } from "./09-useContext/MainApp";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
