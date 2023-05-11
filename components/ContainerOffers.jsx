import Image from "next/image"
import Link from "next/link"
import Offer from "./Offer"

export default function ContainerOffers({ array }) {
    return (
        <section className="text-black w-[85%] mx-[auto] pt-[8.3rem] pb-[11rem]">
            <div className="flex justify-between items-center mb-[4rem]">
                <h2 className="font-medium text-[1.875rem] leading-[2.813rem] text-[#000000]">Top Education offers and deals are listed here</h2>
                <Link className="font-[bold] text-[1.25rem] leading-[1.875] text-[#F0713D]" href={`#`}>See all</Link>
            </div>

            <div className="flex justify-between">
                {
                    array.map(offer => {
                        return (
                            <Offer key={offer.id}
                                    title={offer.title}
                                    description={offer.description}
                                    image={offer.image}
                                    offer={offer.offer}
                                    />
                        )
                    })
                }
            </div>
        </section>
    )
}