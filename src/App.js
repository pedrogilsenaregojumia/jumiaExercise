import "./App.css";
import MainPage from "./pages/MainPage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
      </Switch>
      <Switch>
        <Route exact path="/:pageID" render={() => <MainPage />} />
      </Switch>
    </div>
  );
}

export default App;
