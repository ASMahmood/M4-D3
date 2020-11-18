import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import scifi from "./scifi.json";

function App() {
  return (
    <div className="App">
      <WarningSign warningText="uh oh stinky" />
      <MyBadge color="success" text="wow!" />
      <SingleBook book={scifi[0]} />
    </div>
  );
}

export default App;
