import React from 'react'
import { MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
<style>@import url('https://fonts.googleapis.com/css2?family=Rye&display=swap');</style>

const Header = () => {
  return (
    <header className="bg-earthyBrown h-20 text-white flex items-center justify-between px-4">
      {/* Left side: Title */}
      <h1 className="rye-regular font-normal text-[50px] leading-none">MANZZARI</h1>

      {/* Center: Search bar */}
      <form className="relative flex-grow max-w-md mx-4 font-normal text-[18.68px] leading-[25.48px]">
        <input
          type="text"
          placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
          className="w-full p-2 pr-10 rounded-md border border-gray-300"
        />
        <MagnifyingGlassIcon className="absolute right-0 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </form>

      {/* Right side: Icons */}
      <div className="flex items-center space-x-4">
        <HeartIcon className="h-6 w-6 text-white"/>
        <UserIcon className="h-6 w-6 text-white" />
        <ShoppingCartIcon className="h-6 w-6 text-white"/>
      </div>
    </header>
  );
};

export default Header;