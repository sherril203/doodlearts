import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link href="/" className="text-2xl font-bold text-blue-600">
          Doodle Arts
        </Link>

        <nav>
          <ul className="flex gap-8 font-medium">
            <li>
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/doodles" className="hover:text-blue-500">
                Doodles
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-blue-500">
                Reviews
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex gap-3">
          <Link href="/signup">
            <button className="px-4 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
              Sign Up
            </button>
          </Link>

          <Link href="/login">
            <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
              Login
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;