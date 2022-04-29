import React, {Component} from "react";
import data from "../../data/data.json";

import MenuItem from "../MenuItem";

class OrderScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: undefined
        };
        this.fetchData = this.fetchData.bind(this);
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

    render() {
        return (
            <div className="orderScreenWrapper">
                <div className="container">
                    <div className="row">
                        {this.state.menu?.map((item, index) => <MenuItem key={index} data={item} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderScreen;