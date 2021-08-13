import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContextTutorial from "./ContextAPI/ContextTutorial";
import PropsTutorial from "./Props/PropsTutorial";
import StMaNavigation from "./StMaNavigation";

export default function StateManagement() {
  return (
    <div>
      <Router>
        <StMaNavigation />
        <Switch>
          <Route exact path="/statemanagement/props">
            <PropsTutorial />
          </Route>
          <Route exact path="/statemanagement/context">
           <ContextTutorial/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
