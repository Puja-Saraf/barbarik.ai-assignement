import React, { useEffect, useState } from "react";
import logo from "../img/logo.png";

const options=[
    {
        icon:"fa-solid fa-house",
        name:"Dashboard"
    },
    {
        icon:"fa-solid fa-cube",
        name:"CRM"
    },
    {
        icon:"fa-regular fa-file-lines",
        name:"Integration"
    },
    {
        icon:"fa-solid fa-layer-group",
        name:"Co-Pilot"
    },
]

export default function Sidebar() {

  const [open,setOpen]=useState(true);

  const handleSidebarOpen=()=>{
    setOpen(window.innerWidth>767);
  }

  useEffect(() => {
    handleSidebarOpen();
    window.addEventListener("resize", handleSidebarOpen);
    return () => {
      window.removeEventListener("resize", handleSidebarOpen);
    };
  }, []);

  return (
    <div className="h-screen max-w-32 flex fixed md:static bg-[#302f30] border-r border-gray-500">
      <nav className="flex flex-col h-[100%]">
        <div className="m-4 flex flex-row items-center justify-between">
          <img src={logo} alt="logo" className={`${open? "w-32":"w-0"} overflow-hidden transition-all`} />
          <button className="text-gray-400" onClick={() => setOpen(!open)}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <div className={`bg-[#3b3b3c] flex flex-row items-center ml-auto mr-auto mt-4 w-fit ${open? "border border-gray-500 rounded-lg":""} overflow-hidden transition-all`}>
            <i className={`${open? "mr-1.5 ml-2":"w-0"} overflow-hidden transition-all fa-solid fa-magnifying-glass text-gray-500 text-sm`}></i>
            <input
              className={`${open? "w-40 px-0.5 py-3": "w-0"} overflow-hidden transition-all text-gray-400 text-sm focus:outline-none bg-[#3b3b3c]`}
              placeholder="Search"
              // onChange={}
            />
          </div>
        <div className="px-3 flex flex-col justify-between h-[100%] mb-5">
        <ul className="mt-4">
            {options.map((option,_index)=>{
                return <li key={_index} className="cursor-pointer flex items-center px-2 py-2 text-gray-400 hover:bg-[#3674f6] hover:bg-opacity-25 hover:text-white rounded-lg">
                   <i className={`${option.icon}`}></i>
                   <p className={`${open? "w-36 ml-4":"w-0"} overflow-hidden transition-all`}>{option.name}</p>
                </li>
            })}
        </ul>
        <ul className="mb-3">
            <li className="cursor-pointer flex items-center px-2 py-2 text-gray-400 hover:bg-[#3674f6] hover:bg-opacity-25 hover:text-white rounded-lg">
                <i className={`fa-regular fa-circle-question`}></i>
                <p className={`${open? "w-36 ml-4":"w-0"} overflow-hidden transition-all`}>Support</p>
            </li>
            <li className="cursor-pointer flex items-center px-2 py-2 text-gray-400 hover:bg-[#3674f6] hover:bg-opacity-25 hover:text-white rounded-lg">
                <i className={`fa-solid fa-gear`}></i>
                <p className={`${open? "w-36 ml-4":"w-0"} overflow-hidden transition-all`}>Settings</p>
            </li>
        </ul>
        </div>
      </nav>
    </div>
  );
}
