import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import data from "../static/Country.json";
import industry from "../static/Industry.json";

export default function Organisation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    org_name: "",
    industry: "",
    org_location: "",
    state: "",
    address: "",
    currency: "",
    language: "",
    time_zone: "",
    is_registered: "",
  });

  const onSubmit = (d) => {
    console.log(d);
  };

  const [country, setCountry] = useState("India");
  const [countryIdx, setCountryIdx] = useState(0);

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].country === country) {
        setCountryIdx(i);
        break;
      }
    }
  }, [country]);

  return (
    <div className="w-[90%] m-auto mt-6 bg-[#302f30]">
      <h1 className="text-lg text-white font-semibold">
        Organisational Details
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-sm md:text-md mt-4 md:mt-6"
      >
        <div className="md:grid md:grid-cols-2 md:gap-4 w-[100%] justify-center">
          <div className="md:col-span-2 mb-4 md:mb-0">
            <label htmlFor="org_name" className="font-semibold text-gray-300">
              Organisation Name <span className="text-red-500">*</span>
            </label>
            <div className="">
              <input
                type="text"
                className="border-[0.5px] border-slate-600 rounded-md mt-1 bg-[#3b3b3c] w-[100%] px-2 py-3 focus:outline-none text-gray-300"
                placeholder="Enter"
                {...register("org_name", { required: true, maxLength: 100 })}
              />
              {errors.org_name?.type === "required" && (
                <p className="text-red-500 text-xs">
                  Organisation Name is required.
                </p>
              )}
            </div>
          </div>
          <div className="md:col-span-2 mb-4 md:mb-0">
            <label htmlFor="industry" className="font-semibold text-gray-300">
              Industry <span className="text-red-500">*</span>
            </label>
            <div className="">
              <select
                placeholder="Select"
                {...register("industry")}
                className="border-[0.5px] border-slate-600 rounded-md mt-1 bg-[#3b3b3c] w-[100%] px-2 py-3 focus:outline-none text-gray-300"
              >
                {industry.map((option, _index) => {
                  return (
                    <option
                      key={_index}
                      value={option.industry}
                      className="bg-[#3b3b3c] text-gray-300"
                    >
                      {option.industry}
                    </option>
                  );
                })}
              </select>
              {errors.industry?.type === "required" && (
                <p className="text-red-500 text-xs">Industry is required.</p>
              )}
            </div>
          </div>

          <div className="md:col-span-1 flex flex-col">
            <label
              htmlFor="org_location"
              className="font-semibold text-gray-300"
            >
              Organisation Location <span className="text-red-500">*</span>
            </label>
            <div className="mb-4">
              <select
                placeholder="Select"
                {...register("org_location")}
                className="border-[0.5px] border-slate-600 rounded-md mt-1 bg-[#3b3b3c] w-[100%] px-2 py-3 focus:outline-none text-gray-300"
                onChange={(e) => setCountry(e.target.value)}
              >
                {data.map((option, _index) => {
                  return (
                    <option
                      key={_index}
                      value={option.country}
                      className="bg-[#3b3b3c] text-gray-300"
                    >
                      {option.country}
                    </option>
                  );
                })}
              </select>
              {errors.org_location?.type === "required" && (
                <p className="text-red-500 text-xs">
                  Organisation Location is required.
                </p>
              )}
            </div>
          </div>

          <div className="md:col-span-1 flex flex-col">
            <label htmlFor="state" className="font-semibold text-gray-300">
              State/Union Territory <span className="text-red-500">*</span>
            </label>
            <div className="mb-4">
              <select
                placeholder="Select"
                {...register("state")}
                className="border-[0.5px] border-slate-600 rounded-md mt-1 bg-[#3b3b3c] w-[100%] px-2 py-3 focus:outline-none text-gray-300"
              >
                {data[countryIdx].states.map((option, _index) => {
                  return (
                    <option
                      key={_index}
                      value={option}
                      className="bg-[#3b3b3c] text-gray-300"
                    >
                      {option}
                    </option>
                  );
                })}
              </select>
              {errors.state?.type === "required" && (
                <p className="text-red-500 text-xs">
                  State/Union Territory is required.
                </p>
              )}
            </div>
          </div>
          <h1 className="md:col-span-2 text-lg text-white font-semibold">
            Regional Settings
          </h1>
          <div className="md:col-span-1 flex flex-col">
            <label htmlFor="currency" className="font-semibold text-gray-300">
              Currency <span className="text-red-500">*</span>
            </label>
            <div className="">
              <select
                placeholder="Select"
                {...register("currency")}
                className="border-[0.5px] border-slate-600 rounded-md mt-1 bg-[#3b3b3c] w-[100%] px-2 py-3 focus:outline-none text-gray-300"
              >
                {data[countryIdx].currencies.map((option, _index) => {
                  return (
                    <option
                      key={_index}
                      value={option}
                      className="bg-[#3b3b3c] text-gray-300"
                    >
                      {option}
                    </option>
                  );
                })}
              </select>
              {errors.currency?.type === "required" && (
                <p className="text-red-500 text-xs">Currency is required.</p>
              )}
            </div>
          </div>

          <div className="md:col-span-1 flex flex-col">
            <label htmlFor="language" className="font-semibold text-gray-300">
              Language <span className="text-red-500">*</span>
            </label>
            <div className="">
              <select
                placeholder="Select"
                {...register("language")}
                className="border-[0.5px] border-slate-600 rounded-md mt-1 bg-[#3b3b3c] w-[100%] px-2 py-3 focus:outline-none text-gray-300"
              >
                {data[countryIdx].languages.map((option, _index) => {
                  return (
                    <option
                      key={_index}
                      value={option}
                      className="bg-[#3b3b3c] text-gray-300"
                    >
                      {option}
                    </option>
                  );
                })}
              </select>
              {errors.language?.type === "required" && (
                <p className="text-red-500 text-xs">Language is required.</p>
              )}
            </div>
          </div>

          <div className="md:col-span-2 mb-4 md:mb-0">
            <label htmlFor="time_zone" className="font-semibold text-gray-300">
              Time Zone <span className="text-red-500">*</span>
            </label>
            <div className="mb-4">
              <select
                placeholder="Select"
                {...register("time_zone")}
                className="border-[0.5px] border-slate-600 rounded-md mt-1 bg-[#3b3b3c] w-[100%] px-2 py-3 focus:outline-none text-gray-300"
              >
                {data[countryIdx].timezones.map((option, _index) => {
                  return (
                    <option
                      key={_index}
                      value={option}
                      className="bg-[#3b3b3c] text-gray-300"
                    >
                      {option}
                    </option>
                  );
                })}
              </select>
              {errors.time_zone?.type === "required" && (
                <p className="text-red-500 text-xs">Time Zone is required.</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row mb-6">
          <label htmlFor="is_registered" className="font-semibold text-gray-300">Is This Business Registered for GST?</label>
          <input
              className="ml-14 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-[#3674f6] checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
              type="checkbox"
              {...register("is_registered")}
              role="switch" />
        </div>
        <div className="mb-4 text-gray-300 text-md">
          <p>Note:</p>
          <p>
            <span>
              <i className="text-[0.4rem] mr-2 relative -top-0.5 fa-solid fa-circle"></i>
            </span>
            You can update some of these preferences from settings anytime.
          </p>
        </div>
        <div className="flex flex-row gap-8">
          <button
            type="submit"
            className="cursor-pointer w-fit py-2 px-7 text-md font-semibold hover:opacity-75 bg-[#3674f6] text-white rounded-md"
          >
            Get Started
          </button>
          <button className="cursor-pointer w-fit py-2 px-7 text-md font-semibold hover:opacity-75 border border-gray-400 text-white rounded-md">
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
}
