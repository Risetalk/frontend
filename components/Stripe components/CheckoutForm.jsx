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
      <button className="py-[0.4rem]  px-[0.8rem] text-white bg-[#F8662B] mt-[1rem] rounded-[0.8rem]" disabled={isProcessing} id="submit">
        <span className="" id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button >

      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
