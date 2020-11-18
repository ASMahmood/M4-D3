import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";

function App() {
  return (
    <div className="App">
      <WarningSign warningText="uh oh stinky" />
    </div>
  );
}

export default App;
