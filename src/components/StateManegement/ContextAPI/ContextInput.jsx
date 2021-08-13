import { useContext } from "react";
import { InputValueContext } from "./context/InputValueContext";

export default function ContextInput() {
const {dispatch} = useContext(InputValueContext)
    return (
        <div className="border">
           <input type="number" onChange={(e)=> dispatch({type: 'SET_INPUT_VALUE', payload: e.target.value})} />
        </div>
    )
}
