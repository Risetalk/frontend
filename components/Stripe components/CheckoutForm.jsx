'use client';
import { useEffect, useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()


  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!stripe || !elements){
      return;
    }

    setIsProcessing(true)

    const {error} = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`
      },
      //redirect: 'if_required',
    })
    //axios.post('http://localhost:3001/payment/create-payment', { amount: 3000 })

  // if(error){
  //   setMessage(error.message)
  // }else if(paymentIntent && paymentIntent.status === 'succeeded'){
  //   setMessage('Payment status: ' + paymentIntent.status + ':)')
  // } else{
  //   setMessage('Unexpected status')
  // }
    setIsProcessing(false)
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement />
      <button className='bg-slate-500' disabled={isProcessing} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button >

      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
