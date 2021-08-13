import { useState } from "react";

export default function CounterAndToggle() {
    const [count, setCount] = useState(0);
    const onClickFunction = () =>{
      setCount((prevState)=> prevState + 2)
    }
  
    const [toggle, setToggle] = useState(true)
    return (
        <div>
            <h1>Counters and Toggle</h1>
           <button onClick={onClickFunction}>Increase counter</button>
        <p>{count}</p>
        <button onClick={()=> setToggle((prevState)=> !prevState)}>Set toggle</button>
        <p>{toggle ? "ON" : "OFF"}</p> 
        </div>
    )
}
