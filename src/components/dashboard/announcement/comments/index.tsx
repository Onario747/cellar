import React,{ useState, useRef } from "react";

interface Comment  {
    id: number
    avatar: string
    text: string
    timestamp?: string
    likes: number
    replies: number
  }  

export default function MobileComments({onClose}) {
  const [isOpen, setIsOpen] = useState(true);
  const drawerRef = useRef(null);
  const startY = useRef(0);

//   const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  // Handles swipe down to close
  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    const currentY = e.touches[0].clientY;
    if (currentY - startY.current > 50) closeDrawer(); // Swipe down threshold
  };

  const comments = [
    {
      id: 1,
      author: "@Anyanwu Star",
      text: "Thanks a lot, i was finally about to give up on using it",
      timeAgo: "6 min ago",
      likes: 6,
      replies: 14,
      avatar: "/user.png",
      timestamp: "11:08 PM"
    },
    {
      id: 2,
      author: "@Anyanwu Star",
      text:
        "Really nice! I finally got it. You guys are amazing, i am going to give a good review",
      timeAgo: "6 min ago",
      likes: 1,
      replies: 0,
      hasAvatar: true,
      avatar: "/user.png",
      timestamp: "11:08 PM"
    },
    {
      id: 3,
      author: "@Anyanwu Star",
      text: "Nice, thank a lot!",
      timeAgo: "6 min ago",
      likes: 11,
      replies: 7,
      avatar: "/user.png",
      timestamp: "11:08 PM"
    },
    {
      id: 4,
      author: "@Anyanwu Star",
      text:
        "I really like the fact that you guys listen to your users, that's not something most do",
      timeAgo: "6 min ago",
      likes: 1,
      replies: 0,
      highlight: true,
      avatar: "/user.png",
      timestamp: "11:08 PM"
    },
    {
      id: 5,
      author: "@Anyanwu Star",
      text: "I am going to tell my friends about this, thanks a lot",
      timeAgo: "6 min ago",
      likes: 0,
      replies: 0,
      avatar: "/user.png",
      timestamp: "11:08 PM"
    },
  ];

  return (
    <div className="absolute inset-0 h-screen w-full flex z-9999990 justify-center items-center">
     
      <div
        ref={drawerRef}
        className={`fixed bottom-0 left-0 w-full h-[75vh] bg-black shadow-xl rounded-t-2xl transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {/* Header with Icons */}
        <div className="flex justify-between items-center p-4 border-b">
          {/* Back Arrow */}
          <button onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Title */}
          <h2 className="text-lg text-white mr-auto items-center ml-0 font-semibold">Comments ({comments.length})</h2>

          {/* Close Icon */}
          <button onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Content */}
         {/* Comments List */}
      <div className={`transition-all duration-300 overflow-hidden max-h-[500px]`}>
        {comments.map((comment) => (
          <div key={comment.id} className="px-4 py-3 ">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                {comment.avatar ? (
                  <img
                    src={comment.avatar || "/placeholder.svg"}
                    alt="User avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-700" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm bg-gray-800 flex flex-col text-white p-2 rounded-md max-w-[66%] mb-1">{comment.text}
                <p className="mt-2 mb-0 ml-auto mr-0">
                    {comment.timestamp && <span className="text-xs text-gray-500 mt-1">{comment.timestamp}</span>}
                </p>

                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <button className="text-gray-400 hover:text-gray-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 11V19C7 19.5523 6.55228 20 6 20H4C3.44772 20 3 19.5523 3 19V11C3 10.4477 3.44772 10 4 10H6C6.55228 10 7 10.4477 7 11Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 10L17.7632 5.2906C17.4331 4.81539 16.8308 4.58209 16.2496 4.6893L12.5 5.5C11.8839 5.61567 11.5 6.14309 11.5 6.77101V10L7.5 10C6.39543 10 5.5 10.8954 5.5 12V13.5C5.5 14.7759 5.97081 16.0133 6.82104 17.0008L11 21.5C11.2761 21.8231 11.7119 22 12.1667 22H16.5C18.7091 22 20.5 20.2091 20.5 18V12C20.5 11.4872 20.2124 11.0645 19.8394 10.7765L21 10Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <span className="text-xs text-gray-400">{comment.likes}</span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-300 text-xs flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 10.5V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H13L7 21V17H5C3.89543 17 3 16.1046 3 15V12.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Reply
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

      </div>
    </div>
  );
}
