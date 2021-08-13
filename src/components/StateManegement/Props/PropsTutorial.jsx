import { useState } from "react";
import MultipliedInput from "./MultipliedInput";
import StateManagementInput from "./StateManagementInput";

export default function PropsTutorial() {
    const [inputValue, setInpuValue] = useState(0)
    return (
        <div>
            <h1>Props Tutorial</h1>
            <StateManagementInput setInputValue={setInpuValue} inputValue={inputValue}/>
            <p>Belowe (the second component), the input will be multiplied by 3</p>
            <MultipliedInput inputValue={inputValue}/>
        </div>
    )
}
