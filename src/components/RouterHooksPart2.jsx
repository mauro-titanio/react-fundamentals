//This component get data from Route Hooks

import { useHistory } from "react-router-dom";

export default function RouterHooksPart2() {
  const history = useHistory();
  console.log("History from second component ", history);

  return (
    <div>
      <p>Data passed from route = {history.location.state.data}</p>
      <button onClick={() => history.goBack()}>Go back</button>
    </div>
  );
}
