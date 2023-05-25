'use client'

import { useSelector } from "react-redux"
import CheckoutPage from "./Stripe components/CheckoutPage"
import Image from "next/image"

export default function Summary() {

    const infoToBuyCourses = useSelector((state) => state.courses);
    const dataMyCart = infoToBuyCourses.my_cart[0];

    console.log(dataMyCart);

    const productos = [
        {
            id: 1,
            title: "adipising elit, sed do eiusmod tempor",
            description: "Lorem ipsum dollar...",
            price: "$24.69",
            imagaCourse: "https://s3-alpha-sig.figma.com/img/7a80/a7af/42c44b95173f6bb18529bebd58808a65?Expires=1685318400&Signature=E~pERGHZPO3qMDIY2T9HGeH2t0ktDgjORjbz1HCvPoniWK6llKtYmDsMtFQ1Nq4q4KlMS0g8OU1yL-hHmIM3XEzqcme1W0Qn7bDiQNF86rwNPNunYcSSqutiEHEfvAgfiqGVZrNQGaI~r3Y~BqHew2RbUnpXsXaTHnXbS2QvCpwGHvhCAm9gyxnRsFeHY7Pwwb477-aL0FiU9Dq5ynIV-IaEPyjuaF-xpMFWIiKd7mDqZPLR5qO7qTdvo~w83sxtJgM9ghRiseW9Mb-9yen-3VfJ9tMBpOgznJMLzu2C4FLrJkr5L0KRTyxkHta4CXqMjHZpBBLKonqGcknmESf7Bg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
            id: 2,
            title: "adipising elit, sed do eiusmod tempor",
            description: "Lorem ipsum dollar...",
            price: "$24.69",
            imagaCourse: "https://s3-alpha-sig.figma.com/img/7a80/a7af/42c44b95173f6bb18529bebd58808a65?Expires=1685318400&Signature=E~pERGHZPO3qMDIY2T9HGeH2t0ktDgjORjbz1HCvPoniWK6llKtYmDsMtFQ1Nq4q4KlMS0g8OU1yL-hHmIM3XEzqcme1W0Qn7bDiQNF86rwNPNunYcSSqutiEHEfvAgfiqGVZrNQGaI~r3Y~BqHew2RbUnpXsXaTHnXbS2QvCpwGHvhCAm9gyxnRsFeHY7Pwwb477-aL0FiU9Dq5ynIV-IaEPyjuaF-xpMFWIiKd7mDqZPLR5qO7qTdvo~w83sxtJgM9ghRiseW9Mb-9yen-3VfJ9tMBpOgznJMLzu2C4FLrJkr5L0KRTyxkHta4CXqMjHZpBBLKonqGcknmESf7Bg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        }
    ]

    return (
        <article className="w-[35%] bg-[#002B5A20] rounded-[1.25rem] m-auto mt-4 p-[1.8rem]">
            <h3 className="mb-[2rem]">Summary</h3>
            <div className="productos">
                {/* {
                    productos.map(product => (
                        <div className="flex gap-x-[1.25rem] w-[ 100%] border-b-[0.5px] border-b-stone-400" key={product.id}>
                            <div className="w-[30%] py-[0.6rem] ">
                                <Image className="rounded-[1.25rem]" src={product.imagaCourse} alt="img-product" width={400} height={200} />
                            </div>
                            <div className="">
                                <h3 className="font-normal text-[0.8rem] leading-[2rem] text-[#000000]">{product.title}</h3>
                                <p className="font-normal text-[0.8rem] leading-[2rem] text-[#5B5B5B]">{product.description}</p>
                                <h4 className="font-normal text-[1.2rem] leading-[2.6rem] text-[#000000]">{product.price}</h4>
                            </div>

                        </div>
                    ))
                } */}
                  
                        <div className="flex gap-x-[1.25rem] w-[ 100%] border-b-[0.5px] border-b-stone-400" key={dataMyCart.id}>
                            <div className="w-[30%] py-[0.6rem] ">
                                <img className="rounded-[1.25rem]" src={dataMyCart.background_image} alt="img-product" width={400} height={200} />
                            </div>
                            <div className="">
                                <h3 className="font-normal text-[0.8rem] leading-[2rem] text-[#000000]">{dataMyCart.title}</h3>
                                <p className="font-normal text-[0.8rem] leading-[2rem] text-[#5B5B5B]">{dataMyCart.description}</p>
                                <h4 className="font-normal text-[1.2rem] leading-[2.6rem] text-[#000000]">{dataMyCart.price} $</h4>
                            </div>

                        </div>
                    

                <ul>
                    <li className="flex justify-between border-b-[0.5px] border-b-stone-400  py-[0.6rem] font-semibold text-[1rem] leading-[2rem] text-[#5B5B5B]">
                        <span>Subtotal</span>
                        <span>{dataMyCart.price} $</span>
                    </li>
                    {/* <li className="flex justify-between border-b-[0.5px] border-b-stone-400  py-[0.6rem] font-semibold text-[1rem] leading-[2rem] text-[#5B5B5B]">
                        <span>Coupon Discount</span>
                        <span>0 %</span>
                    </li>
                    <li className="flex justify-between border-b-[0.5px] border-b-stone-400  py-[0.6rem] font-semibold text-[1rem] leading-[2rem] text-[#5B5B5B]">
                        <span>TAX</span>
                        <span>5</span>
                    </li> */}
                    <li className="flex justify-between py-[0.6rem] font-semibold text-[1rem] leading-[2rem] text-[#000000]">
                        <span>Total</span>
                        <span>{dataMyCart.price} $</span>
                    </li>
                    <li>
                        <CheckoutPage course={dataMyCart} />
                    </li>
                </ul>
            </div>
        </article>
    )
}