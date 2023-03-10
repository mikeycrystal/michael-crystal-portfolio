import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="../public/assets/logo.png" alt="/" width="205" height="5" />
      </div>
      <div>
        <ul>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
