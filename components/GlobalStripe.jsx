'use client';

import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement } from '@stripe/react-stripe-js';
import { useStripe, useElements } from "@stripe/react-stripe-js";
import ElStripe from './ElStripe';


import axios from 'axios'

export default function GlobalStripe() {
	const [stripePromise, setStripePromise] = useState(null);
	const [clientSecret, setClientSecret] = useState("");
	console.log(clientSecret)
  
	useEffect(() => {
	  fetch("http://localhost:5252/config").then(async (r) => {
		const { publishableKey } = await r.json();
		// console.log(publishableKey);
		setStripePromise(loadStripe(publishableKey));
	  });
	}, []);
  
	useEffect(() => {
	//   fetch("http://localhost:5252/create-payment-intent", {
	// 	method: "POST",
	// 	body: JSON.stringify({}),
	//   }).then(async (r) => {
	// 	const { clientSecret } = await r.json();
	// 	console.log(clientSecret);
	// 	setClientSecret(clientSecret);
	//   });
	setClientSecret('pi_3NC2MuDcUyKcM4LI3ax0TtNy_secret_LaMPltabqwCf6HrDVP5sJHeNs')
	}, []);

  return (
	<div className='flex flex-row'>=
		  <Elements stripe={stripePromise} options={{ clientSecret }}>
		    <ElStripe />
		  </Elements>
			
	</div>
  )
}
