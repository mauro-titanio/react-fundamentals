import { useContext } from "react";
import { InputValueContext } from "./context/InputValueContext";
import ContextMultipliedByTwo from "./ContextMultipliedByTwo";

export default function MultipliedCalculations() {
    const {dispatch} = useContext(InputValueContext)
    return (
        <div className="border">
            <ContextMultipliedByTwo/>
            <p>Multiplied calculation button set to 100</p>
            <button onClick={()=>dispatch({type: 'SET_INPUT_VALUE_TO_100'}) }>Set to 100</button>
        </div>
    )
}
