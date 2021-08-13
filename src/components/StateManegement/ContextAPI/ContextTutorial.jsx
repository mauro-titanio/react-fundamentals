import CalculationOverview from "./CalculationOverview";
import { InputValueProvider } from "./context/InputValueContext";
import ContextInput from "./ContextInput";

export default function ContextTutorial() {
  return (
    <div className="border">
      <h1>Context Tutorial</h1>
      <InputValueProvider>
        <small>Context input component</small>
        <ContextInput />
        <br />
        <br />
        <br />
        <small>Calculation overview component</small>
        <CalculationOverview />
      </InputValueProvider>
    </div>
  );
}
