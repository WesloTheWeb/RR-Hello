import React, { useState } from "react";
import Greeter from "./components/Greeter/Greeter";
import NameEntry from "./components/NameEntry/NameEntry";
import { QueryContext } from "./context/QueryContext";

function App() {

  const [userName, setUserName] = useState([]);

  const providerValues = React.useMemo(() => ({
    userName, setUserName
  }), [userName]);

  return (
    <>
      <div>
        Hello from App.js. Please make a new component named Greeter.js that renders a paragraph element (p) with the text "Hello World".
      </div>
      <QueryContext.Provider value={providerValues}>
        <NameEntry />
        <Greeter userName={providerValues} />
      </QueryContext.Provider >
    </>
  );
}

export default App;