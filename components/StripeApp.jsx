'use client'

import { useEffect, useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";

export default function StripeApp() {
  const stripe = useStripe();
  const elements = useElements();

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`
      },
      // redirect: 'if_required',
    });

    // Handle error or payment success
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Payment succeeded!');
    }

    setIsProcessing(false);
  };

  return (
    <div className="flex flex-row">
        <div className="text-black">Hola</div>
        <form id="payment-form" onSubmit={handleSubmit}>
          <PaymentElement/>
          <button className="text-black" disabled={isProcessing}>
            Buy
          </button>
        </form>
      
    </div>
  );
}
