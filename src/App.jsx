import { useState, useEffect } from "react";
import "./index.css";

// Statefull ya que no solo "pinta algo" si no que también contiene lógica JS

function App() {
  const [dependency1, setDependency1] = useState(1);
  const [dependency2, setDependency2] = useState(1);

  // ciclo de vida: mount(montado), update(actualizaciones), unmount(cundo se visita otra página)
  useEffect(() => {
    console.log("only dependency1", dependency1, dependency2);
  }, [dependency1]); //array of dependencies

  useEffect(() => {
    console.log("only dependency2", dependency1, dependency2);
  }, [dependency2]);

  useEffect(() => {
    console.log("change both", dependency1, dependency2);
  }, [dependency1, dependency2]);

  return (
    <div className="App">
      <button onClick={() => setDependency1((prev) => prev + 1)}>
        Change dependency1
      </button>
      <button onClick={() => setDependency2((prev) => prev + 1)}>
        Change dependency2
      </button>
      <button
        onClick={() => {
          setDependency1((prev) => prev + 1);
          setDependency2((prev) => prev + 1);
        }}
      >
        Change both
      </button>
    </div>
  );
}

export default App;
