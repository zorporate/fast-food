import React, {Component} from "react";
import data from "../../data/data.json";

class OrderScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                <p>test</p>
            </div>
        )
    }
}

export default OrderScreen;