import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from  "./components/MyBadge";


function App() {
  return (
    <div className="App">
      <WarningSign warningText="uh oh stinky" />
      <MyBadge  color="success" text="wow!"/>
    </div>
  );
}

export default App;
