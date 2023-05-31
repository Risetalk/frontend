

export default function Reviews({ name, img_profile, review }) {
    return (
        <div>
            <section>
                <div className="flex items-center gap-x-[0.4rem]">
                    <div className="bg-[#F9662A] rounded-full w-[40px] h-[40px]"></div>
                    <span className="font-bold text-[#F9662A]">{name}</span>
                </div>
                <p className="w-[90%] ">{review}</p>
            </section>
        </div>
    )
}