import React from "react";
import Announcement from "./announcement";
import RightCol from "./right-col";
import ProductSlide from "./product-slide";
import "./index.css"
import MobileComments from "./announcement/comments";

const Dashboard = () => {
  return (
    // <div className="relative mt-[68px] w-full">
    //   {/* Grid layout with 4/6 (left) and 2/6 (right) division */}
    //   <div className="grid grid-cols-[4fr_2fr] w-full gap-4">
    //     {/* Left Section */}
    //     <div className="col-span-1 flex flex-col gap-4">
    //       <div className="w-full">
    //         <Announcement />
    //       </div>
    //       <div className="w-full overflow-hidden">
    //         <ProductSlide />
    //       </div>
    //     </div>
    //     {/* Right Sidebar */}
    //     <div className="col-span-1">
    //       <RightCol />
    //     </div>
    //   </div>
    // </div>

    <div className="relative w-full mt-[68px] flex lg:px-6 px-0">
      <div className="flex flex-col lg:w-[70%] w-full h-full">
        <div className="w-full">
          <Announcement />
        </div>
        <div className="mt-32 w-full overflow-auto scrollbar-hide">
          <ProductSlide />
        </div>
      </div>
      <div className="bg-red-500 w-[30%] h-full hidden lg:flex">
        <RightCol />
      </div>
    </div>
  );
};

export default Dashboard;
