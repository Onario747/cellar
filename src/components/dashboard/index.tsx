import React from "react";
import Announcement from "./announcement";
import RightCol from "./right-col";

const Dashboard = () => {
  return (
    <div className="relative mt-[68px] w-full">
      <div className="grid grid-cols-[1fr_420px] w-full">
        <div className="col-span-1">
          <Announcement />
        </div>
        <div className="col-span-1">
          <RightCol />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
