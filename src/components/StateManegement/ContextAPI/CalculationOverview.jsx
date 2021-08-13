import MultipliedCalculations from "./MultipliedCalculations";
import whenUseContext from "../../../images/whenusecontext.png";
export default function CalculationOverview() {
  console.log(whenUseContext);
  return (
    <div>
      <MultipliedCalculations />
      <div className="container">
        <p>Context use cases</p>
        <img width="100%" src={whenUseContext} alt="Use Context" />
      </div>
    </div>
  );
}
