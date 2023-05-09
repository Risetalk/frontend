import Link from "next/link";
const navLinks = [
  { title: "Home", path: "/" },
  { title: "Courses", path: "/courses" },
  { title: "Careers", path: "/careers" },
  { title: "Blog", path: "/blog" },
  { title: "About Us", path: "/about" },
];

export default function NavBar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div>
            <ul>
              <li className="text-black hover:text-gray-400 font-family:Poppins; font-size:22px;  font-weight:400; m-5; line-height:33px; letter-spacing:0.06em; text-align:left; px-6 py-2">
                <Link href="/">Rise Talk</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center py-1">
            <ul className="flex ">
              {navLinks.map((element, index) => {
                return (
                  <Link key={index} href={element.path}>
                    <li className="text-black hover:text-gray-400 font-family:Poppins; font-size:22px;  font-weight:400; m-5; line-height:33px; letter-spacing:0.06em; text-align:left; px-6 py-2">
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
