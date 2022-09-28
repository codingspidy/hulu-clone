import requests from "../utils/requests";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="relative">
      <div
        className="flex space-x-10 sm:space-x-20 px-10 sm:px-20 text-lg 
        sm:text-xl whitespace-nowrap  overflow-x-scroll scrollbar-hide"
      >
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
          onClick={() => router.push(`/?genre=${key}`)}
            className="cursor-pointer transition duration-100 transform 
            hover:scale-125 hover:text-white active:text-red-500"
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 h-8 w-1/12 bg-gradient-to-l from-[#06202a]"/>
    </nav>
  );
};

export default Nav;
