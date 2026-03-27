import { useState } from "react";

function UseState(){
    const [count, setCount] = useState(0)

    return(
        <div>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count+1)}>+</button>
            <button onClick={() => setCount(count-1)}>-</button>
            <button onClick={() =>setCount(0)}>reset</button>

        </div>
    )
}

export default UseState;