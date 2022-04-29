import React, {useEffect, useState} from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    const {update, size, price, item} = props;

    useEffect(() => {
        update(item + "-" + size, count, count * parseFloat(price));
    }, [count, size, update, item, price]);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {/* <p>Size:  {props.size}, ${props.price}</p> */}
                    <button onClick={() => (count > 0) ? setCount(count - 1) : setCount(count)} >-</button>
                    {count}
                    <button onClick={() => setCount(count + 1)} >+</button>
                    <p>Size:  {size}, ${price}</p>
                </div>
            </div>
        </div>
    )
}

export default Counter;