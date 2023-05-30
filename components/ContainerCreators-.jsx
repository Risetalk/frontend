import Link from "next/link";
import Creator from "./Creator";

async function getCreators  () {
    const res = await fetch("http://localhost:3000/creators.json");
    const data = await res.json();
    return data;
    
}

export  default async function ContainerCreators() {
    const creators = await getCreators()
    return (
        <section className="text-black pt-[5rem] pb-[8rem]">
            <div className="w-[85%] mx-[auto]">
                <div className="flex justify-between items-center">
                    <h3 className="font-medium text-[1.6rem] leading-[2.6rem] text-[#000000]">Classes tought by real creators</h3>
                    <Link className="font-bold text-[1.25rem] leading-[1.875rem] text-[#F0713D]" href={`#`} >See all</Link>
                </div>

                <div className="flex flex-wrap justify-between  gap-y-[2.5rem]">
                    {
                        creators?.map(creator => {
                            return (
                                <Creator key={creator.id}
                                    name={creator.name} 
                                    img={creator?.img}
                                    description={creator.description}
                                    />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}