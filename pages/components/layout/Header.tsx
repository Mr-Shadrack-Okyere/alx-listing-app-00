import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold">ALX Listings</div>
      <nav className="space-x-4">
        <button className="px-3 py-1 rounded-md bg-blue-500 text-white">Sign In</button>
        <button className="px-3 py-1 rounded-md border border-blue-500 text-blue-500">Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;
