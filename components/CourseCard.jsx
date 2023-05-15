import Image from "next/image"
import Link from "next/link"

export default function CourseCard({id, title, image, tema, duration, description, author,price,offer}) {
    
    return (
        <div className="">
            <article
                className=" ml-[2rem] pt-4 px-6 bg-[white] pb-12  rounded-[1.25rem]  shadow-2xl "
                key={id}>
                <Image
                    className="rounded-[1.25rem] h-[200px] object-cover w-[100%]"
                    src="https://s3-alpha-sig.figma.com/img/85a2/d4de/f6c18daf5c07703727b43dd90a8b626b?Expires=1684713600&Signature=cIqtlkEG~vIIzl18CorFGibrIVbGubcANZC43c8DWYn6V5h5d314sHKb0-aTg8e66yG~uuIfzhv4Uy2J9BQxMmxIyMpvr5OBzOF~-JVrwJO~X4SOyNpO1-lAQW5i89eQAdDrnIBkIlcrkCdEayffA8FJ4Ks2JrgFb9fDMBXv6RzUsf0hDcULIK1egEXGO8TV6WZB5sqGycjrMimEz2mE5xW4fF5ApVxycgzYlr3g5NSAhPDrsEZVYcDeuM3pk2y6vczTs9BofWZg6SRh0Drc7DhBskIWCTNQbUeyMpfTBkcITJJrCQbEpshMVx4ki~wsSMwbGSxuzn2pjJQ-VPjswQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt={title || "img-course"}
                    width={300}
                    height={300}
                />
                <div className="flex justify-between my-[1rem]">
                    <span className="font-medium text-[0.875rem] leading-[1.563rem] text-[#d77631]">
                        {tema}
                    </span>
                    <span className="font-medium text-[0.875rem] leading-[1.563rem] text-[#696984]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="inline-block w-4 h-4 mr-1">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                        </svg>
                        {duration} Month
                    </span>
                </div>
                <Link href={`search/${id}`} className="font-medium text-[1.3rem] leading-[1.9rem] text-[#252641] mb-[1.2rem]">
                    {title}
                </Link>
                <p className="font-normal text-[1rem] leading-[1.6rem] text-[#696984] mb-[1.063rem]">
                    {description}
                </p>
                <div className="flex items-end justify-between">
                    <div className="flex items-center">
                        <Image className="rounded-full" src={"https://source.unsplash.com/64x64/?person"} alt="logo" width={36} height={36} />
                        <span className="font-medium text-[1rem] leading-[1rem] ml-[0.938rem] text-[black]">
                            {author}
                        </span>
                    </div>
                    <div>
                        <span className="font-light italic line-through text-[1rem] leading-[1.688rem] mr-4 text-[#00000080]">
                            ${price}
                        </span>
                        <span className="font-bold text-[1rem] leading-[2.25rem] text-[#222129] ">
                            ${offer}
                        </span>
                    </div>
                </div>
            </article>
        </div>
    )
}