import React from 'react'
import Link from 'next/link'
import Image from "next/image";
const MyDoodles = () => {
  return (
    <div>
        <p className="text-2xl font-bold">Saved Doodles</p>
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
  )
}

export default MyDoodles
