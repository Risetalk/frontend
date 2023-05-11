import Link from "next/link";
import Image from "next/image";
const navLinks = [
  { title: "Home", path: "/" },
  { title: "Courses", path: "/courses" },
  { title: "Careers", path: "/careers" },
  { title: "Blog", path: "/blog" },
  { title: "About Us", path: "/about" },
];

export default function NavBar() {
  return (
    <nav className="bg-white shadow-lg  w-full z-10">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-9 ">
        <div className="flex justify-between items-center py-3">
          <div>
            <ul>
              <li className="text-[#5B5B5B] hover:text-gray-400 font-family:Poppins; font-size:22px;  font-weight:400; m-5;  text-align:left; px-6">
                <Link href="/">
                  <Image
                    className=" relative-block  top-2 left-24"
                    src="/risetalkLogo.png"
                    alt="Example Image"
                    width={219}
                    height={140}
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="flex items-center py-1 w-[39rem] h-33px"
            style={{ left: "1016px", top: "55px", borderRadius: "0px" }}>
            <ul className="flex ">
              {navLinks.map((element, index) => {
                return (
                  <Link key={index} href={element.path}>
                    <li className="text-[#5B5B5B] hover:text-gray-400 font-poppins text-base font-normal leading-[33px] tracking-[0.02em] text-left px-6 py-2">
                      {element.title}
                    </li>
                  </Link>
                );
              })}
            </ul>
            <div>
              <button>
                <img
                  className="h-8 w-8 rounded-full mr-2 "
                  src="https://source.unsplash.com/64x64/?person"
                  alt="User avatar"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
