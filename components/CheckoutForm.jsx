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
			const { data } = await axios.post('https://backend-production-ea3f.up.railway.app/payment', {
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
	


	return (
		<div className=" w-[100%]">
			<form
				onSubmit={handleSubmit}
				className=" w-[100%] flex flex-col items-center"
			>
				<CardElement className="bg-white w-[100%] border-4 border-gray-300 rounded-[1rem] p-3" />
				{!stripe ? (
					<div className="flex justify-center items-center ">
						<div className="border-t-4 border-b-4 border-gray-900 rounded-full w-12 h-12 animate-spin"></div>
					</div>
				) : (
					<button className="bg-[#FE7D03]  mt-4 hover:bg-[#f58d2b] text-white font-bold py-2 px-4 border border-[#FE7D03]-700 rounded">
						$$$ BUY $$$
					</button>
				)}
			</form>
		</div>
	);
};

export default CheckoutForm;


