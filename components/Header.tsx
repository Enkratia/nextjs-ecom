import React from "react";

import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow">
      <Link href="/">
        <Image
          src="https://img.freepik.com/free-vector/evil-ghost-concept-illustration_114360-11358.jpg?w=826&t=st=1697554356~exp=1697554956~hmac=2a8340a2e0f7e79ff8afa2796a76aaf7294211232b6cf074304b55a39d810ae1"
          width={150}
          height={150}
          alt="logo"
        />
      </Link>

      <div>
        <button className="px-6 py-2 text-sm text-indigo-500 transition-colors duration-300 border-2 border-indigo-400 rounded-full shadow-xl shadow-indigo-300/30 hover:bg-indigo-500 hover:text-indigo-100">
          Log In
        </button>
        <button className="px-6 py-2 text-sm text-indigo-500 transition-colors duration-300 border-2 border-indigo-400 rounded-full shadow-xl shadow-indigo-300/30 hover:bg-indigo-500 hover:text-indigo-100">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
