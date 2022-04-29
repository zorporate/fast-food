import React from "react";

import Counter from "../Counter";

/*
 * The MenuItem is a UI component that renders per menu item, i.e. one MenuItem
 * is rendered for Burger, Fries, and Drink.  A MenuItem may have multiple Counters
 * depending on how many options are available for that item.
 * 
 * @prop data:  an object consisting of the item name and an array of options
 * @prop update:  a function that updates the order state in OrderScreen
 */
const MenuItem = (props) => {
    return (
        <div className="col-md-3">
            <h3>{props.data.item}</h3>
            {props.data.options.map((option, key) => 
                <Counter key={key} size={option.size} price={option.price} item={props.data.item} update={props.update} />)}
        </div>
    )
}
export default MenuItem;