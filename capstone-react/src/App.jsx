import "./Application.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <h1>Hi</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
