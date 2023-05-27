'use client';
import Checkout from '@/components/Checkout';
import Summary from '@/components/Summary';
import CheckoutForm from '@/components/Stripe components/CheckoutForm';

//Esto es de Jesse

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
	'pk_test_51N8lsLDcUyKcM4LIF5dll7ccQipSzmHbMILHzNn4GgGqgm1WBk8PFI0Bznh171t339AHcKrYZtCubakr5pJMX2kT00lGEXvWQl',
);



//Traer el curso por el ID para luego mandarlo por PROPS a CheckoutForm
const id = 'o1noj2n31o2312312';

export default function CheckOutPage() {
	return (
		<main>
			<section className="flex justify-around items-start px-[6.25rem] py-[2rem]">
			 
					<CheckoutForm curso={id} />
				
			</section>
		</main>
	);
}
