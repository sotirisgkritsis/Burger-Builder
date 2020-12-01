import React, { Component } from 'react';

// axios
import axios from '../../axios-orders';
// components
import Order from '../../components/Order/Order';
class Orders extends Component{
    state= {
        orders: [],
        loading: true
    }
    componentDidMount(){
        axios.get('/orders.json')
            .then(res => {
                const fetchedOders = [];
                for(let key in res.data){
                    fetchedOders.push({
                       ...res.data[key] ,
                        id: key
                    })
                }
                this.setState({loading: false, orders: fetchedOders});
            })
            .catch(err => {
                this.setState({loading: false});
            })
    }
    render(){
        return(
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price} />
                ))}

            </div>
        );
    }
}

export default Orders;