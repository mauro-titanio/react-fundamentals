
export default function StateManagementInput({setInputValue, inputValue}) {
   
    return (
        <div>
            <input type="number" onChange={(e)=> setInputValue(e.target.value)} />
            <p>Multiplied number in the first component: {inputValue * 2}</p>
        </div>
    )
}
