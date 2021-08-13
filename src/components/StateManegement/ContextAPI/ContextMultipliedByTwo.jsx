import { useContext } from "react";
import { InputValueContext } from "./context/InputValueContext";
export default function ContextMultipliedByTwo() {
  const {state} = useContext(InputValueContext)
  return (
    <div className="border">
      <p>Multiplied number: {state.inputValue * 2}</p>
    </div>
  );
}
