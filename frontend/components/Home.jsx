import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="p-6">

      <div className="mb-8">
        <p className="text-3xl font-bold">Welcome to Doodle Arts</p>
        <p className="text-xl text-gray-600">
          Here you can see various doodles from doodle artists.
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Doodles</p>

        <Link href="/doodleform">
          <button className="px-5 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600">
            Add Doodle
          </button>
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-xl border border-gray-300 p-4 w-72">
        <Image
          src="/doodle.jpg" 
          alt="Doodle"
          width={250}
          height={250}
          className="rounded-lg object-cover"
        />

        <p className="mt-3 text-lg font-semibold">Doodle Name</p>

        <div className="flex gap-3 mt-4">
          <Link href="/view/1">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              View
            </button>
          </Link>

          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;