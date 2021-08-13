export default function MultipliedInput({inputValue}) {
    console.log(inputValue)
    return (
        <div>
             <p>Multiplied number in the second component: {inputValue * 3}</p>
        </div>
    )
}
