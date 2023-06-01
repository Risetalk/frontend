'use client'
import axios from 'axios';
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector } from 'react-redux';

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const amount = useSelector(state => state.courses.totalPay);

  useEffect(() => {
    axios.get('http://46.101.105.17:3001/payment/config')
      .then(async (response) => {
        const { publishableKey } = await response.data;
        setStripePromise(loadStripe(publishableKey));
      })
      .catch((error) => {
        // Handle error
      });
  }, []);

  useEffect(() => {
    if (amount) {
      axios.post('http://46.101.105.17:3001/payment/create-payment', { amount })
        .then(async (response) => {
          const { clientSecret } = await response.data;
          setClientSecret(clientSecret);
        })
        .catch((error) => {
          // Handle error
        });
    }
  }, [amount]);

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
