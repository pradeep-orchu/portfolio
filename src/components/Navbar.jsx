import React from 'react'

export default function Navbar() {

  return (
    <nav className=" p-5 scroll-bar-hide">
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold text-slate-800">Pradeep Orchu</div>
        <ul className="flex space-x-4 text-gray-600">
          <li><a href="#" className="">Gallery</a></li>
          <li><a href="#" className="">Services</a></li>
          <li><a href="#" className="">About</a></li>
          <li><a href="#" className="">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
