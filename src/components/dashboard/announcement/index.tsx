import React, { useState } from "react";
import MobileComments from "./comments";

const Announcement = () => {
  const [showComments, setShowComments] = useState(false);
  const [showMobileComments, setShowMobileComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const toggleMobileComments = () => {
    setShowMobileComments(!showMobileComments)
  }

  const comments = [
    {
      id: 1,
      author: "@Anyanwu Star",
      content: "Thanks a lot, i was finally about to give up on using it",
      timeAgo: "6 min ago",
      likes: 6,
      replies: 14,
    },
    {
      id: 2,
      author: "@Anyanwu Star",
      content:
        "Really nice! I finally got it. You guys are amazing, i am going to give a good review",
      timeAgo: "6 min ago",
      likes: 1,
      replies: 0,
      hasAvatar: true,
    },
    {
      id: 3,
      author: "@Anyanwu Star",
      content: "Nice, thank a lot!",
      timeAgo: "6 min ago",
      likes: 11,
      replies: 7,
    },
    {
      id: 4,
      author: "@Anyanwu Star",
      content:
        "I really like the fact that you guys listen to your users, that's not something most do",
      timeAgo: "6 min ago",
      likes: 1,
      replies: 0,
      highlight: true,
    },
    {
      id: 5,
      author: "@Anyanwu Star",
      content: "I am going to tell my friends about this, thanks a lot",
      timeAgo: "6 min ago",
      likes: 0,
      replies: 0,
    },
  ];

  return (
    <div className={`padding-x w-full col-span-2 relative`}>
    
{showMobileComments &&  <MobileComments onClose={() => setShowMobileComments(!showMobileComments)} />
}    
      <div className="flex w-full">
        <div
          className={`h-[450px] mt-[50px] border-[1.5px] border-white/5 rounded-[10px] bg-[#131313] flex-1 ${
            showComments ? "w-[60%]" : "w-0"
          }`}
        >
          <div className="flex justify-between border-[1.5px] border-white/5 rounded-t-[10px] bg-[#0C0C0C] h-[52px] w-full px-3">
            <div className="flex items-center gap-3">
              <img src="/assets/svg/microphone.svg" />
              <h2 className="text-[20px] font-public font-medium text-white">
                Announcements!
              </h2>
            </div>

            <div className="items-center gap-3 hidden lg:flex ">
              <img src="/assets/svg/people.svg" />
              <span className="font-public text-[14px] text-white/50">
                25 Views
              </span>
            </div><div className="items-center gap-3 ml-auto mr-0 flex lg:hidden ">
              <img src="/assets/svg/people.svg" />
              <span className="font-public text-[14px] text-white/50">
                Full screen
              </span>
            </div>
          </div>
          <div className="p-6 bg-white max-w-[620px] w-full mx-auto h-[calc(100%-52px)] overflow-y-auto">
            <div className="text-black font-public">
              <h3 className="text-[24px] font-public font-medium mb-4">
                Use this guide to Access our website features
              </h3>
              <p className="mb-4">
                Welcome! To access all the features of our website, you need to
                create an account. Follow these simple steps:
              </p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">
                  Step 1: Visit the Signup Page
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Navigate to our website and click on the "Sign up" button
                    located at the top right corner of the homepage.
                  </li>
                  <li>
                    This will take you to the registration page where you can
                    begin creating your account.
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">
                  Step 2: Enter Your Information
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Provide your full name, email address and create a secure
                    password.
                  </li>
                  <li>
                    Ensure that your email address is active, as it will be used
                    for verification and account recovery.
                  </li>
                  <li>Verify your email and login back to the site.</li>
                  <li>
                    Next, move over to the events tab and click to pick an
                    event. You will be prompted to enter the details of the
                    event.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:flex flex-col lg:justify-between justify-center mt-4">
            <div className="max-w-[497px] w-full flex flex-col lg:gap-2 gap-3">
              <h1 className="text-white font-public text-[20px] font-semibold">
                Step-by-Step Guide on How to Access our full Website Features
                for Free!
              </h1>
              <div className="flex items-center gap-[2rem]">
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-public text-white/50">
                    By Anyanwu Star
                  </span>
                  <div className="w-[3px] h-[3px] bg-white/50 rounded-full"></div>
                  <span className="font-public text-white/50 text-[12px]">
                    6 min ago
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/assets/svg/people.svg" alt="people-icon" />
                  <span className="text-[12px] text-white/50">25 Views</span>
                </div>
              </div>
            </div>
            <div className="flex mt-2 gap-5">
              <div className="flex gap-2 cursor-pointer">
                <img
                  src="/assets/svg/like.svg"
                  alt="Like"
                  className="w-5 h-5"
                />
                {!showComments && (
                  <span className="font-public text-[14px] text-white/50">
                    20 Likes
                  </span>
                )}
              </div>
              <div
                className="items-center gap-2 hidden lg:flex cursor-pointer"
                onClick={toggleComments}
              >
                <img
                  src="/assets/svg/comment.svg"
                  alt="Comment"
                  className="w-5 h-5"
                />
                {!showComments && (
                  <span className="font-public text-[14px] text-white/50">
                    10 Comments
                  </span>
                )}
              </div>
              <div
                className="items-center gap-2 lg:hidden flex cursor-pointer"
                onClick={toggleMobileComments}
              >
                <img
                  src="/assets/svg/comment.svg"
                  alt="Comment"
                  className="w-5 h-5"
                />
                {!showComments && (
                  <span className="font-public text-[14px] text-white/50">
                    12 Comments
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                {!showComments && (
                  <span className="font-public text-[14px] text-white/50">
                    Share
                  </span>
                )}
                <img
                  src="/assets/svg/share.svg"
                  alt="Share"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div
          className={`h-[450px] mt-[50px] bg-[#0C0C0C] border-[1.5px] border-white/5 rounded-[10px] transition-all duration-300 ease-in-out ${
            showComments ? "w-[40%] opacity-100" : "w-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="flex justify-between items-center p-4 border-b-[1.5px] border-white/5">
            <h2 className="text-[20px] font-public font-medium text-white flex items-center whitespace-nowrap">
              Comments <span className="text-white/50 ml-2">(10)</span>
            </h2>
            <button
              onClick={toggleComments}
              className="text-white/50 hover:text-white text-2xl leading-none"
            >
              ×
            </button>
          </div>

          <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-120px)]">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className={`border-b border-white/5 pb-4 last:border-0 ${
                  comment.highlight ? "bg-[#1a3a6e] rounded-lg p-3" : ""
                }`}
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gray-500 flex-shrink-0 overflow-hidden">
                    {comment.hasAvatar ? (
                      <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
                        A
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-600"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <h3 className="text-white/80 font-public text-sm">
                        {comment.author}
                      </h3>
                      <span className="text-white/50 text-xs ml-2">
                        {comment.timeAgo}
                      </span>
                    </div>
                    <p className="text-white font-public text-sm mt-1 break-words">
                      {comment.content}
                    </p>

                    <div className="flex items-center gap-4 mt-3">
                      <button className="flex items-center gap-1 text-white/50 hover:text-white">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 11V19H5V11H7ZM12 5.3L13.4 8H17V16H14L12.6 13H10V5H12V5.3ZM12 7H11V11H13.2L14.6 14H16V10H12.8L11.4 7H12Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="text-xs">{comment.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 text-white/50 hover:text-white">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22V4C22 2.9 21.1 2 20 2ZM20 17.2L18.8 16H4V4H20V17.2Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="text-xs">Reply</span>
                      </button>
                      {comment.replies > 0 && (
                        <button className="text-white/50 hover:text-white text-xs flex items-center gap-1">
                          See {comment.replies} Replies
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.5 17L15.5 12L9.5 7V17Z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 left-4 right-4 p-3 border border-white/10 rounded-full bg-[#131313]">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Say Something..."
                className="w-full bg-transparent text-white/80 text-sm focus:outline-none"
              />
              <button className="text-white/50 hover:text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
