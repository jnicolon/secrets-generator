import "./app.scss";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddSecret from "./pages/AddSecret";
import UserSecrets from "./pages/UserSecrets";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import Footer from "./components/Footer";
import LogIn from "./components/LogIn";

function App() {
  return (
    <div className="app">
      <Router basename="/">
        <Navbar />
        {/* <LogIn /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/addsecret" component={AddSecret} />
          <Route path="/usersecrets" component={UserSecrets} />
          <Route path="/createuser" component={CreateUser} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
