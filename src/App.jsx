import "./App.css";
import CounterAndToggle from "./components/CounterAndToggle";
import ConditionalRendering from "./components/ConditionalRendering";
import Forms from "./components/Forms";
import DataFetchingGetData from "./components/DataFetchingGetData";
import DataFetchingSetData from "./components/DataFetchingSetData";
import CustomHooks from "./components/CustomHooks/CustomHooks";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import RouterHooks from "./components/RouterHooks";
import RouterHooksPart2 from "./components/RouterHooksPart2";
import StateManagement from "./components/StateManegement/StateManagement";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/counterandtoggle">
              <CounterAndToggle />
            </Route>
            <Route exact path="/conditionalrendering">
              <ConditionalRendering />
            </Route>
            <Route exact path="/forms">
              <Forms />
            </Route>
            <Route exact path="/getdata">
              <DataFetchingGetData />
            </Route>
            <Route exact path="/setdata">
              <DataFetchingSetData />
            </Route>
            <Route exact path="/customhooks">
              <CustomHooks />
            </Route>
            <Route exact path="/routerhooks">
              <RouterHooks />
            </Route>
            <Route exact path="/routerhookspart2">
              <RouterHooksPart2 />
            </Route>
            <Route exact path="/statemanagement">
              <StateManagement />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
