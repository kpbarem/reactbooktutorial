//named and default import/exports
//one one default export module
//think of a module as a file
import React from "react";
import Booklist from "./Booklist";
import "./App.css";

const App = () => (
  <section>
    <Booklist />
  </section>
);

export default App;
