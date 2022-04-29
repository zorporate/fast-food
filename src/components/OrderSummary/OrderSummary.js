import React from "react";

const OrderSummary = (props) => {
    return (
        <div className="orderSummary">
            {Object.keys(props.order).map((item, i) => 
                <p key={i}>{item} x {props.order[item].count} = ${props.order[item].subTotal}</p>
            )}
            <h2>TOTAL:  $ 
                {Object.keys(props.order).reduce(
                    (acc, cur) => acc + props.order[cur]["subTotal"],
                    0.0
                )}
            </h2>
        </div>
    )
}

export default OrderSummary;