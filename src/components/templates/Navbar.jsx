import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed w-full">
      <div className="h-2 bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)]"></div>
      <div className="flex flex-row gap-4 items-center bg-[#0e1111] text-white font-semibold text-lg h-12 py-4 w-auto lg:max-w-5xl px-5 lg:px-0 lg:mx-auto">
        <Link
          className="hover:text-transparent focus:text-transparent focus:bg-clip-text hover:bg-clip-text hover:bg-[rgb(61,224,102)] focus:bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)]"
          to="/"
        >
          Home
        </Link>{" "}
        <Link
          className="hover:text-transparent focus:text-transparent focus:bg-clip-text hover:bg-clip-text hover:bg-[rgb(61,224,102)] focus:bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)]"
          to="/projects"
        >
          Projects
        </Link>{" "}
        <Link
          className="hover:text-transparent focus:text-transparent focus:bg-clip-text hover:bg-clip-text hover:bg-[rgb(61,224,102)] focus:bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)]"
          to=""
        >
          Blog
        </Link>
        <Link
          className="hover:text-transparent focus:text-transparent focus:bg-clip-text hover:bg-clip-text hover:bg-[rgb(61,224,102)] focus:bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)]"
          to="/about"
        >
          About
        </Link>{" "}
      </div>
    </nav>
  );
};
