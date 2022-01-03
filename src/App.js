import { useState } from "react";
import Test from "./page/Test";

function App() {
  const [close, setClose] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setClose(true)}>close</button>
      {!close && <Test></Test>}
    </div>
  );
}

export default App;
