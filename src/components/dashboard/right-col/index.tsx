import React from "react";

interface Memo {
  id: number;
  title: string;
  author: string;
  iconBg: string;
  iconType: "star" | "info" | "bell" | "info-white";
}

const RightCol = () => {
  const memos: Memo[] = [
    {
      id: 1,
      title:
        "Important Security Updates: How to keep Your Account Safe on Our Memo Website",
      author: "Anyanwu Star",
      iconBg: "bg-amber-500",
      iconType: "star",
    },
    {
      id: 2,
      title:
        "Important Security Updates: How to keep Your Account Safe on Our Memo Website",
      author: "Anyanwu Star",
      iconBg: "bg-white",
      iconType: "info-white",
    },
    {
      id: 3,
      title:
        "Important Security Updates: How to keep Your Account Safe on Our Memo Website",
      author: "Anyanwu Star",
      iconBg: "bg-red-500",
      iconType: "bell",
    },
    {
      id: 4,
      title:
        "Important Security Updates: How to keep Your Account Safe on Our Memo Website",
      author: "Anyanwu Star",
      iconBg: "bg-white",
      iconType: "info-white",
    },
  ];

  return (
    <div className="h-screen border-l-[1.5px] border-white/5 w-[420px] bg-[#0C0C0C] fixed right-0 overflow-y-auto px-6 custom-scrollbar">
      <div className="pt-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[18px] font-medium text-white font-public">
            Previous Memos <span className="text-white/50">(34)</span>
          </h2>
          <button>
            <img
              className="w-6 h-6"
              src="/assets/svg/arrowRight.svg"
              alt="Arrow right"
            />
          </button>
        </div>

        <div className="mb-2 flex justify-between">
          <div className="text-[12px] font-public text-white/50">Today</div>
          <div className="text-[12px] font-public text-white/50">
            31 min ago
          </div>
        </div>

        {memos.map((memo, index) => (
          <React.Fragment key={memo.id}>
            {index === 1 && (
              <div className="mb-2 mt-4 flex justify-between">
                <div className="text-[12px] font-public text-white/50">
                  Jan 14th, 2025
                </div>
                <div className="text-[12px] font-public text-white/50">
                  2 days ago
                </div>
              </div>
            )}
            <div className="bg-[#080808] rounded-lg p-3 mb-4">
              <div className="flex gap-3">
                <div className={`bg-[#131313] rounded-full p-1 self-start w-auto h-auto`}>
                  {memo.iconType === "star" && (
                    <img
                      className="w-5 h-5"
                      src="/assets/svg/star.svg"
                      alt="Star icon"
                    />
                  )}
                  {memo.iconType === "info-white" && (
                    <img
                      className="w-4 h-4"
                      src="/assets/svg/info.svg"
                      alt="Info icon"
                    />
                  )}
                  {memo.iconType === "bell" && (
                    <img
                      className="w-4 h-4"
                      src="/assets/svg/bell.svg"
                      alt="Bell icon"
                    />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-white">
                    {memo.title}
                  </h3>
                  <p className="text-xs text-gray-400">{memo.author}</p>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Training Statistics */}
      <div className="bg-zinc-900 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-white">
            Training Statistics
          </h2>
          <button>
            <img
              className="w-6 h-6"
              src="/assets/svg/arrow-right.svg"
              alt="Arrow right"
            />
          </button>
        </div>

        <div className="relative mb-6">
          <div className="flex justify-center items-center">
            <div className="relative w-[180px] h-[180px]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="transparent"
                  stroke="#333"
                  strokeWidth="10"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="transparent"
                  stroke="url(#gradient)"
                  strokeWidth="10"
                  strokeDasharray="282.7"
                  strokeDashoffset="127.2"
                  transform="rotate(-90 50 50)"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#FF4500" />
                    <stop offset="100%" stopColor="#FF8C00" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white">55%</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <p className="text-sm text-white">The agile Learner</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-[100px] h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-white">2/10 Books read</span>
          </div>
          <a href="#" className="text-sm text-gray-400">
            View all
          </a>
        </div>
      </div>
      <div className="h-6"></div>
    </div>
  );
};

export default RightCol;
