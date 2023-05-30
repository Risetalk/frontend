'use client';
import axios from 'axios';
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";

function Payment(props) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axios.get('http://localhost:3001/payment/config')
      .then(async (response) => {
        const { publishableKey } = await response.data;
        // console.log(publishableKey);
        setStripePromise(loadStripe(publishableKey));
      })
      .catch((error) => {
        // Handle error
      });
  }, []);
  const amount = 3000
  useEffect(() => {
    axios.post('http://localhost:3001/payment/create-payment', {amount})
      .then(async (response) => {
        const { clientSecret } = await response.data;
        console.log(clientSecret);
        setClientSecret(clientSecret);
      })
      .catch((error) => {
        // Handle error
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
