'use client'

import axios from 'axios';
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import FormPayment from "./CheckoutForm";

function Payment(props) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5252/config").then(async (response) => {
      const { publishableKey } = response.data;
      // console.log(publishableKey);
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);
  
  useEffect(() => {
    axios.post("http://localhost:5252/create-payment-intent", {}).then(async (response) => {
      const { clientSecret } = response.data;
      console.log(clientSecret);
      setClientSecret(clientSecret);
    });
  }, []);
  

  return (
    <>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <h1>React Stripe and the Payment Element</h1>
        
          <FormPayment />
        </Elements>
      )}
    </>
  );
}

export default Payment;
