import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./utils";

export default function Footer() {
    return (
        <footer className="flex h-40vh bg-midnight-shadow pt-8 ">
            <div className="ml-2 w-2/5 pl-8 text-white text-[0.8rem]">
                <Image
                    alt="logo-footer"
                    className="ml-6"
                    src={"/images/logofooter.png"}
                    width={280}
                    height={700}
                />
                <p className="w-2/3 font-medium m-5 text-dusty-gray">
                    Where creativity meets commerce - discover a new world of shopping in
                    our Polygon-based metaverse marketplace.
                </p>
                <div>
                    <input className="px-4 py-2 rounded-md border-cloud-gray border-2 bg-transparent font-semibold text-cloud-gray placeholder:text-cloud-gray " type="text" placeholder="Subscribe to our Newsletter" />
                    <button className="m-2 px-4 py-2 rounded-md border-cloud-gray border-2 bg-transparent font-semibold text-cloud-gray hover:bg-cloud-gray hover:text-midnight-shadow " type="submit">Subscribe</button>
                </div>
                <h4 className="font-medium text-[0.9rem] mt-3 text-cloud-gray " >© 2023 RiseTalk Technologies Inc.</h4>
            </div>
            <div className="w-3/5">
                <ul className="flex flex-wrap  ">
                    {navLinks.map((element, index) => (
                        <Link className="m-2 w-[22%] " key={index} href={element.path}>
                            <li className="text-blue-gray  text-[0.8rem]  hover:text-burnt-orange ">
                                {element.title}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </footer>
    );
}