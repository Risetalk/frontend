import StripeApp from './StripeApp';
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';

function ElStripe() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const fetchConfig = async () => {
      const response = await axios.get("http://localhost:5252/config");
      const { publishableKey } = response.data;
      setStripePromise(loadStripe(publishableKey));
    };

    fetchConfig();
  }, []);

  useEffect(() => {
    const createPaymentIntent = async () => {
      const response = await axios.post("http://localhost:5252/create-payment-intent", {});
      const { clientSecret } = response.data;
      console.log(clientSecret);
      setClientSecret(clientSecret);
    };

    createPaymentIntent();
  }, []);

  return (
    <div>
    
        <StripeApp />
    </div>
  );
}


module.exports = ElStripe