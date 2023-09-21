import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-semibold">Logo</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white">Home</a>
            </li>
            <li>
              <a href="#" className="text-white">About</a>
            </li>
            <li>
              <a href="#" className="text-white">Services</a>
            </li>
            <li>
              <a href="#" className="text-white">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
