import Payment from '@/components/Stripe components/Payment'
import Summary from '@/components/Summary'
import React from 'react'

export default function page() {
	return (
		<main className=' pt-[6rem] min-h-screen pb-[3rem]'>
			<div className='flex justify-center items-center'>
				<div className="w-[30%]">
					<Payment />
				
				</div>
				<div className="w-[40%]">
					<Summary />
				
				</div>
			</div>
		</main>
	)
}
