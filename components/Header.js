import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  CheckBadgeIcon,
  RectangleStackIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center sm:items-start m-5 mb-9 h-auto">
      <div className="flex flex-grow justify-between max-w-sm md:max-w-lg">
        <HeaderItem Icon={HomeIcon} title="HOME" />
        <HeaderItem Icon={BoltIcon} title="TRENDING" />
        <HeaderItem Icon={CheckBadgeIcon} title="VERIFIED" />
        <HeaderItem Icon={RectangleStackIcon} title="COLLECTIONS" />
        <HeaderItem Icon={MagnifyingGlassIcon} title="SEARCH" />
        <HeaderItem Icon={UserIcon} title="ACCOUNT" />
      </div>
      <div className="sm:mr-[2.1vw]">
        <Image src="/hulu-logo.png" width={100} height={30} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
