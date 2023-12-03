import React, { useState } from "react";
import Personal from "./Personal";
import Organisation from "./Organisation";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(1);
  const selectedCss =
    "underline underline-offset-8 text-[#3674f6] decoration-[#3674f6]";

  return (
    <div className="w-[100%] bg-[#302f30] ml-14 md:ml-0">
    <div className="flex flex-row justify-center text-gray-400 underline underline-offset-8 mt-6 text-md">
      <p
        className={`${selectedTab === 1 ? selectedCss : ""} mr-4 cursor-pointer`}
        onClick={() => {
          selectedTab !== 1 && setSelectedTab(1);
        }}
      >
        Personal
      </p>
      <p
        className={`${selectedTab === 2 ? selectedCss : ""} cursor-pointer`}
        onClick={() => {
          selectedTab !== 2 && setSelectedTab(2);
        }}
      >
        Organisation
      </p>
    </div>
    {
        selectedTab===1 && <Personal/>
    }
    {
        selectedTab===2 && <Organisation/>
    }
    </div>
  );
}
