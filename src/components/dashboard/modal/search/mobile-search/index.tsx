import React from "react";

export default function MobileSearch({ onClose }) {
  const closeMobileSearch = () => {
    onClose(); // Call the function from props to update the state in Navigation
  };

  return (
    <div className="bg-black text-white absolute inset-0 w-fullq min-h-screen font-sans">
      <div className="p-4 flex flex-col h-full w-full mx-auto">
        <div className="flex items-center space-x-3 mb-4">
          <button className="p-1 cursor-pointer" onClick={closeMobileSearch}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex-1 relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search Memos, Posts and books"
              className="w-full py-2 pl-9 pr-3 bg-gray-900 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-700"
            />
          </div>
        </div>

        <div className="space-y-3">
          {/* Recent searches */}
          <div className="space-y-1">
            {["How to create an account on our website", "Team meeting announcement", "The Competitive Edge", "Global Compliance", "The Governance Grid"].map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <a href="#" className="text-sm">
                  {item}
                </a>
                <button className="p-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Recommended section */}
          <div className="pt-3">
            <h3 className="text-xs text-gray-500 mb-3">Recommended</h3>
            <div className="grid grid-cols-2 gap-3">
              <a href="#" className="bg-gray-900 p-3 rounded-lg">
                <span className="text-sm">The Remote Revolution</span>
              </a>
              <a href="#" className="bg-gray-900 p-3 rounded-lg">
                <span className="text-sm">The Ethical Edge</span>
              </a>
            </div>
          </div>

          {/* Latest book recommendations */}
          <div className="pt-3">
            <h3 className="text-xs text-gray-500 mb-3">Latest book recommendations</h3>
            <a href="#" className="block py-2">
              <span className="text-sm">How to write a compelling memo</span>
            </a>
          </div>

          {/* Product section */}
          <div className="pt-1">
            <h3 className="text-xs text-gray-500 mb-3">Product Zen</h3>
            <a href="#" className="block py-2">
              <span className="text-sm">Compliance in Color</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
