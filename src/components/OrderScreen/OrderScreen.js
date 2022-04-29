import React, {Component} from "react";
import data from "../../data/data.json";

import MenuItem from "../MenuItem";
import OrderSummary from "../OrderSummary";

class OrderScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: undefined,
            order: {}
        };
        this.fetchData = this.fetchData.bind(this);
        this.updateOrder = this.updateOrder.bind(this);
    }

    // simulate a function to fetch data from an external api
    async fetchData() {
        return await new Promise((resolve, reject) => {
            setTimeout(resolve, 2000, data);
        })
    }

    componentDidMount() {
        this.fetchData().then(r => {
            this.setState({menu: r.menu})
        })
    }

    updateOrder(key, newValue, subTotal) {
        this.setState((prevState) => ({
            order: {
                ...prevState.order,
                [key]: {count: newValue, subTotal: subTotal}
            }
        }))
    }

    render() {
        return (
            <div className="orderScreenWrapper">
                <div className="container">
                    <div className="row">
                        {this.state.menu?.map((item, index) => <MenuItem key={index} data={item} update={this.updateOrder} />)}
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Your Order:</h2>
                        </div>
                        <div className="col">
                            <OrderSummary order={this.state.order} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderScreen;