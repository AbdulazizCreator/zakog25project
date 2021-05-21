import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePg from "./pages/HomePg";
import AboutPg from "./pages/AboutPg";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePg />
        </Route>
        <Route exact path="/about">
          <AboutPg />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
