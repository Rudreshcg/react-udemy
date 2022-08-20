import React, { useState } from "react";

const DummyComponent = () => {
    const [num, setNum] = useState(0)

    const handleOnClick = () => {
        debugger
        setNum(num+1)
    }
    return(
        <div>
            <h1>{num}</h1>
            <button onClick={handleOnClick}>click Me !</button>
        </div>
    )
}

export default DummyComponent