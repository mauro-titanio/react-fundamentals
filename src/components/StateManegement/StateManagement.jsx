import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContextTutorial from "./ContextAPI/ContextTutorial";
import PropsTutorial from "./Props/PropsTutorial";
import ReactQueryTutorial from "./ReactQuery/ReactQueryTutorial";
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
          <Route exact path="/statemanagement/reactquery">
           <ReactQueryTutorial/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
