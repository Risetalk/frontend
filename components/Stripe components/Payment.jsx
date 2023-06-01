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
    // axios.get('https://backend-production-ea3f.up.railway.app/payment/config')
    //   .then(async (response) => {
      //     const { publishableKey } = await response.data;
      //   })
      //   .catch((error) => {
        //     // Handle error
        //   });
        setStripePromise(loadStripe('pk_test_51N8lsLDcUyKcM4LIF5dll7ccQipSzmHbMILHzNn4GgGqgm1WBk8PFI0Bznh171t339AHcKrYZtCubakr5pJMX2kT00lGEXvWQl'));
  }, [stripePromise]);

  useEffect(() => {
    if (amount) {
      axios.post('https://backend-production-ea3f.up.railway.app/payment/create-payment', { amount })
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
