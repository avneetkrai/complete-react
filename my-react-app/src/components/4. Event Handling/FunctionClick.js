function FunctionClick() {

    function clickHandler() {
        console.log("Function Click Event")
    }
    return(
        <div>
          <button onClick={clickHandler}>Click Function Button</button>
        </div>
    )
}

export default FunctionClick;