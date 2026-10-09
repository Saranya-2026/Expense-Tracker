import React from 'react'
const Header = () => {
  return (
    <div className="
bg-white/80
backdrop-blur-lg
rounded-3xl
shadow-2xl
p-8
hover:shadow-blue-300
transition
duration-500
">
      <h1 className="text-4xl font-bold text-blue-700">
        💰 Expense Tracker
      </h1>

      <p className="text-gray-600 mt-2">
        Manage your daily expenses easily.
      </p>

    </div>
  );
};

export default Header;