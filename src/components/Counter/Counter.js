import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <button onClick={() => (count > 0) ? setCount(count - 1) : setCount(count)} >-</button>
                    {count}
                    <button onClick={() => setCount(count + 1)} >+</button>
                </div>
            </div>
        </div>
    )
}

export default Counter;