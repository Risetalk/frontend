'use client';
import axios from 'axios';

//Importo lo necesario para usar stripe en el front

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ curso }) => {
	//Esto me devuelve la conexion a stripe de esta manera
	const stripe = useStripe();
	//Esto me permite seleccionar los elementos que esten encerrados por Elements
	const elements = useElements();
	//Funcion para enviar el formulario
	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { error, paymentMethod } = await stripe.createPaymentMethod({
				type: 'card',
				card: elements.getElement(CardElement),
			});

			if (!paymentMethod) return alert(error.message);

			console.log(paymentMethod);

			const { id } = paymentMethod;
			const { data } = await axios.post('http://localhost:3001/payment', {
				id,
				//Los pagos en dolares es en centavos
				//Por lo que al precio hay que multiplicar por 100
				//en mi caso cobrare 100 dolares por lo que seria;
				//AQUI VA CURSO.PRICE * 100
				amount: curso.price * 100,
				//AQUI VA EL CURSO.TITLE
				description: curso.title,
			});

			alert(data.message);
			//Esto es para limpiar el campo de las tarjetas
			elements.getElement(CardElement).clear();
			
		} catch (error) {
			
			alert('No se completo la compra: ', error.message);
		}
	};
	console.log('this is from checkoutpage ' + curso);

	return (
		<div className=" w-full">
			<form onSubmit={handleSubmit} className=" w-full">
				<CardElement />
				{!stripe ? (
					<div class="flex justify-center items-center ">
						<div class="border-t-4 border-b-4 border-gray-900 rounded-full w-12 h-12 animate-spin"></div>
					</div>
				) : (
					<button class="bg-blue-500 ml-10 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
						$$$ BUY $$$
					</button>
				)}
			</form>
		</div>
	);
};

export default CheckoutForm;
