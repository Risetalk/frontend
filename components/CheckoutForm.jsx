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
				amount: 1000 * 100,
				//AQUI VA EL CURSO.TITLE
				description: 'Curso de Prueba',
			});

			alert('Compra exitosa');
			//Esto es para limpiar el campo de las tarjetas
			elements.getElement(CardElement).clear();
			console.log(data);
		} catch (error) {
			console.log(error.message);
			alert('No se completo la compra');
		}
	};

	return (
		<div>
			<h1>Comprando este curso Buenardo</h1>
			<div>
				<h3>Curso de Prueba</h3>
				<h3>1000 usd</h3>
			</div>
			<form onSubmit={handleSubmit}>
				<CardElement />
				<button disabled={!stripe}>Comprar</button>
			</form>
		</div>
	);
};

export default CheckoutForm;
