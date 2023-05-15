export default function Categories(){

    const category = [
        {
            id: "1",
            title: "Desing",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
        },
        {
            id: "2",
            title: "Development",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        },
        {
            id: "3",
            title: "Development",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        },
        {
            id: "4",
            title: "Business",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        },
        {
            id: "5",
            title: "Marketing",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        },
        {
            id: "6",
            title: "Photography",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        },
        {
            id: "7",
            title: "Acting",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        },
        {
            id: "8",
            title: "Business",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        },
    ]

    return (
        <section>
            <section className="text-[black] pt-[3.7rem] pb-[6.25rem]">
                    <div className="w-[87%] m-[auto]">
                        <h2 className="font-semibold text-[#252641] text-[1.85rem] leading-[3.375rem] mb-[3rem]">Choice favourite course from top category</h2>
                        <div className="flex flex-wrap justify-between gap-[3.6rem]">
                            {
                                category.map(cat => {
                                    return (
                                        <article className="w-[21%] flex flex-col items-center p-[1.875rem] px-[2rem] pb-[3.688rem] rounded-[1.25rem] shadow-2xl" key={cat.id}>
                                            <div className="bg-[#662C2E4D] w-[30%] h-[65px]"></div>
                                            <h3 className="font-semibold text-[1.6rem] leading-[2.813rem] mt-[1rem] mb-[1.4rem]">{cat.title}</h3>
                                            <p className="font-normal text-[0.98rem] leading-[1.688rem] text-[#696984] text-center">{cat.description}</p>
                                        </article>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
        </section>
    )
}