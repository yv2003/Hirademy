import React from "react";
import Tooltip from "./ToolTip";

const TT = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Tooltip id="example" text="Hello! This is a tooltip.">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Hover Me
        </button>
      </Tooltip>
    </div>
  );
};

export default TT;
