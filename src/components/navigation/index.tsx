import React, { useState } from "react";
import { SearchModal } from "../dashboard/modal/search";
import MobileSearch from "../dashboard/modal/search/mobile-search";

const navLinks = [
  { title: "Feeds", url: "/", active: true },
  { title: "Cool Expx", url: "/cool-expx" },
  { title: "Chat", url: "/chat" },
  { title: "Settings", url: "/settings" },
];

const Navigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);

  return (
    <header className="flex items-center z-9900000 justify-between bg-[#0C0C0C] text-white padding-x w-full border-b-[1.5px] border-white/5 h-[68px] fixed top-0 z-20">
      <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="flex items-center">
        <span className="text-[32px] font-medium text-white font-poppins">Cellar</span>
      </div>

      {mobileSearch && <MobileSearch onClose={() => setMobileSearch(false)} />}

      <nav className="gap-10 hidden lg:flex">
        {navLinks.map((link) => (
          <a key={link.title} href={link.url} className={`text-[14px] font-public no-underline ${link.active ? "text-white" : "text-white/50"}`}>
            {link.title}
          </a>
        ))}
      </nav>

      <div className="hidden lg:flex items-center bg-white/10 rounded-[10px] h-[44px] max-w-[300px] w-full pl-4">
        <img src="/assets/svg/search-icon.svg" alt="search icon" className="object-contain mr-3 cursor-pointer" />
        <input
          type="text"
          onFocus={() => setIsModalOpen(true)}
          placeholder="Search Memos, Posts and Books"
          className="hidden lg:flex bg-transparent border-none text-white outline-none w-full text-[12px] placeholder-white/25 font-public"
        />
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-4">
          <img
            src="/assets/svg/search-icon.svg"
            alt="search icon"
            onClick={() => setMobileSearch(true)}
            className="flex lg:hidden object-contain mr-3 cursor-pointer"
          />
          <img src="/assets/svg/profile.svg" alt="Profile" className="w-[30px] h-[30px] rounded-full object-cover" />
          <span className="text-[14px] font-public text-white hidden lg:flex">Anyanwu Star</span>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
