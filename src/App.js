import "./app.scss";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddSecret from "./components/AddSecret";
import Favorites from "./components/Favorites";
import Secrets from "./components/Secrets";
import LogIn from "./components/LogIn";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <div className="app">
      <Router basename="/">
        <Navbar />
        <Switch>
          <Route path="/" component={Secrets} />
          <Route path="/addsecret" component={AddSecret} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/createuser" component={CreateUser} />
          <Route path="/login" component={LogIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
