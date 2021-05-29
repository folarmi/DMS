import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing, Login, Dashboard } from "./components";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/dashboard" exact component={Dashboard}></Route>
      </Switch>
    </Router>
  );
}

export default App;
