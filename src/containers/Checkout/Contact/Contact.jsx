import React, { Component } from 'react';

// css
import './Contact.css'
// components
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
// axios
import axios from '../../../axios-orders';
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        // preventDefault to prevent the default which is to send a request which i dont want
        event.preventDefault();
         // alert('You Continue!');
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Sotiris Gkritsis',
                address: {
                    street: 'Street 1',
                    zipCode: '12345',
                    country: 'Greece'
                },
                email: 'sotirisgkr@hotmail.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                // console.log(response);
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                // console.log(error);
                this.setState({loading: false});

            })
        console.log(this.props.ingredients);
    }

    render(){
        let form = (
            <form action="">
                    <input className="Input" type="text" name="name" placeholder="Your Name"/>
                    <input className="Input" type="email" name="email" placeholder="Your Email"/>
                    <input className="Input" type="text" name="street" placeholder="Street"/>
                    <input className="Input" type="text" name="postal" placeholder="Postal Code"/>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
        );
        if(this.state.loading){
            form = <Spinner />
        }
        return(
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {form}                
            </div>
        );
    }
}


export default ContactData;