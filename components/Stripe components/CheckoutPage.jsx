'use client';
import Checkout from '@/components/Checkout';
import Summary from '@/components/Summary';
import CheckoutForm from '@/components/CheckoutForm';

//Esto es de Jesse

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
	'pk_test_51N8lsLDcUyKcM4LIF5dll7ccQipSzmHbMILHzNn4GgGqgm1WBk8PFI0Bznh171t339AHcKrYZtCubakr5pJMX2kT00lGEXvWQl',
);




export default function CheckOutPage({course}) {
	
	return (
		<main>
			
			<section className="flex justify-around items-start">
				<Elements stripe={stripePromise}>
					<CheckoutForm curso={course} />
				</Elements>
			</section>
		</main>
	);
}
