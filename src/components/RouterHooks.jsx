import { useHistory } from "react-router-dom";

export default function RouterHooks() {
  const history = useHistory();
  console.log("History from first component ", history);
  const data = 542342; //random number

  //For useParams its the same of angular

  return (
    <div>
      <h1>Router Hooks</h1>
      <br />
      <button onClick={() => history.push("/routerhookspart2", { data })}>
        Go to part 2 plus DATA
      </button>
    </div>
  );
}
