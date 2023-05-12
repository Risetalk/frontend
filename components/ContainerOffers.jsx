'use client'

import Link from "next/link"
import Offer from "./Offer"
import { useState, useEffect } from "react";



export default async function ContainerOffers() {
    const [offers, setOffers] = useState([]);


    useEffect(() => {
        const getOffers = async () => {
            try {
                const res = await fetch("http://localhost:3000/offers.json");
                const data = await res.json();
                setOffers(data);
            } catch (error) {
                console.error("Error fetching recommends:", error);
            }
        };

        getOffers();
        
    }, []);


    return (
        <section className="text-black w-[85%] mx-[auto] pt-[8.3rem] pb-[11rem]">
            <div className="flex justify-between items-center mb-[4rem]">
                <h2 className="font-medium text-[1.875rem] leading-[2.813rem] text-[#000000]">Top Education offers and deals are listed here</h2>
                <Link className="font-[bold] text-[1.25rem] leading-[1.875] text-[#F0713D]" href={`#`}>See all</Link>
            </div>

            <div className="flex justify-between">
                {
                    offers.map(offer => {
                        return (
                            <Offer key={offer.id}
                                off={offer.off}
                                title={offer.title}
                                description={offer.description}
                                img={offer.img}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}