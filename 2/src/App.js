import { useState } from "react";
import Test from "./Test"


function App() {

  const [active, setActive] = useState(false)
  return (
    <div >
      <button onClick={() => setActive(!active)}>{active === false ? "Göster" : "Gizle"}</button>
      {active === true && (
        <Test />
      )}

    </div>
  );
}

export default App;
