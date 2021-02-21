import React from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from 'react-bootstrap';

export default function CheckoutForm() {

    const stripe = useStripe();
    const elements = useElements();
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const{error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
        if(error){
            console.log(error);
        } else {
            console.log(paymentMethod)
            localStorage.clear();
            
            alert('Your payment was successful! Thank you!');
        }
    };
    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <CardElement/>
                <br/>
                <Button type="submit" disabled={!stripe} variant="warning" size="lg">Pay Now</Button>
            </form>
            <br/>
        </div>
    )
}
