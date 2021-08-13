import CalculationOverview from "./CalculationOverview";
import { InputValueProvider } from "./context/InputValueContext";
import ContextInput from "./ContextInput";

export default function ContextTutorial() {
  return (
    <div>
      <h1>Context Tutorial</h1>
      <InputValueProvider>
        <ContextInput />
        <CalculationOverview/>
      </InputValueProvider>
    </div>
  );
}
