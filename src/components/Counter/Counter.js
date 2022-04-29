import React, {useEffect, useState} from "react";

/*
 * A Counter is a component that implements a counter functionality using Hooks.  Counters
 * are unique per option of item.
 * 
 * @prop update:  function that updates the order in OrderScreen component
 * @prop size:    the size of this option
 * @prop price:   the price of this option
 * @prop item:    the category of item (burger, fries, or drink, in this sample)
 */
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