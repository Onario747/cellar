import React from "react";
import Navigation from "./components/navigation";
import Dashboard from "./components/dashboard";
import Dashboard2 from "./components/dashboard/index";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080808]">
      <Navigation />
      <Dashboard2 />
    </div>
  );
};

export default App;
