import React from "react";

import Counter from "../Counter";

const MenuItem = (props) => {
    return (
        <div className="col-md-3">
            <h3>{props.data.item}</h3>
            {props.data.options.map((option, key) => <Counter key={key} size={option.size} price={option.price} item={props.data.item} update={props.update} />)}
        </div>
    )
}
export default MenuItem;