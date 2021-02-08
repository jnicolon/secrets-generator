import "./app.scss";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddSecret from "./pages/AddSecret";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import CreateUser from "./pages/CreateUser";

function App() {
  return (
    <div className="app">
      <Router basename="/">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
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
