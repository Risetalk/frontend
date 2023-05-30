'use client';
import axios from 'axios';
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";

function Payment(props) {
  const [stripePromise, setStripePromise] = useState('pk_test_51N8lsLDcUyKcM4LIF5dll7ccQipSzmHbMILHzNn4GgGqgm1WBk8PFI0Bznh171t339AHcKrYZtCubakr5pJMX2kT00lGEXvWQl');
  const [clientSecret, setClientSecret] = useState("");
  
  // useEffect(() => {
  //   axios.get('http://localhost:3001/config')
  //     .then(async (response) => {
  //       const { publishableKey } = await response.data;
  //       // console.log(publishableKey);
  //     })
  //     .catch((error) => {
  //       // Handle error
  //     });
  // }, []);
  
  useEffect(() => {
    axios.post('http://localhost:3001/payment/intent', {

    // user_id ,  courses , amount, description , paymentMethod , currency 
    })
      .then(async (response) => {
        const info = await response.data;
        console.log(info);
        setClientSecret(info);
      })
      .catch((error) => {
        // Handle error

       console.log(error.message);
        
      });
  }, []);
  

  return (
    <>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <h1>React Stripe and the Payment Element</h1>

          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
