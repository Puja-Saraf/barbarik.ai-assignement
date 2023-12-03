import React from "react";
import { useForm } from "react-hook-form";
import data from "../static/Country.json";

export default function Personal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    name: "",
    email: "",
    mobile_no: 0,
    country: "",
    pincode: 0,
    address: "",
  });

  const onSubmit = (d) => {
    console.log(d);
  };
  return (
    <div className="w-[90%] m-auto mt-10 bg-[#302f30]">
      <h1 className="text-lg text-white font-semibold">Personal Details</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-sm md:text-md mt-4 md:mt-8"
      >
        <div className="md:grid md:grid-cols-2 md:gap-6 w-[100%] justify-center">
          <div className="md:col-span-2 mb-6 md:mb-0">
            <label htmlFor="name" className="font-semibold text-gray-300">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="">
              <input
                type="text"
                className="border-[0.5px] border-slate-600 rounded-md mt-1 bg-[#3b3b3c] w-[100%] px-2 py-3 focus:outline-none text-gray-300"
                placeholder="Enter"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500 text-xs">Name is required.</p>
              )}
            </div>
          </div>

          <div className="md:col-span-1 flex flex-col">
            <label htmlFor="email" className="font-semibold text-gray-300">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="mb-6">
              <input
                type="text"
                className="border-[0.5px] border-slate-600 rounded-md mt-1 bg-[#3b3b3c] w-[100%] px-2 py-3 focus:outline-none text-gray-300"
                placeholder="Enter"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500 text-xs">Email is required.</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-red-500 text-xs">Enter valid Email.</p>
              )}
            </div>
            <label htmlFor="country" className="font-semibold text-gray-300">
              Country <span className="text-red-500">*</span>
            </label>
            <div className="mb-6 md:mb-0">
              <select
                placeholder="Select"
                {...register("country")}
                className="border-[0.5px] border-slate-600 rounded-md mt-1 bg-[#3b3b3c] w-[100%] px-2 py-3 focus:outline-none text-gray-300"
              >
                {data.map((option,_index)=>{
                    return <option key={_index} value={option.country}
                    className="bg-[#3b3b3c] text-gray-300">{option.country}</option>
                })}
              </select>
              {errors.country?.type === "required" && (
                <p className="text-red-500 text-xs">Country is required.</p>
              )}
            </div>
          </div>

          <div className="md:col-span-1 flex flex-col">
            <label htmlFor="mobile_no" className="font-semibold text-gray-300">
              Mobile No. <span className="text-red-500">*</span>
            </label>
            <div className="mb-6">
              <input
                type="number"
                className="border-[0.5px] border-slate-600 rounded-md mt-1 bg-[#3b3b3c] w-[100%] px-2 py-3 focus:outline-none text-gray-300"
                placeholder="Enter"
                {...register("mobile_no", {
                  required: true,
                  minLength: 10,
                  maxLength: 10,
                })}
              />
              {errors.mobile_no?.type === "required" && (
                <p className="text-red-500 text-xs">Mobile no. is required.</p>
              )}
              {errors.mobile_no?.type === "maxLength" && (
                <p className="text-red-500 text-xs">Mobile no. must be of length 10.</p>
              )}
              {errors.mobile_no?.type === "minLength" && (
                <p className="text-red-500 text-xs">Mobile no. must be of length 10.</p>
              )}
            </div>
            <label htmlFor="pincode" className="font-semibold text-gray-300">
              Pincode
            </label>
            <div className="mb-6 md:mb-0">
              <input
                type="number"
                className="border-[0.5px] border-slate-600 rounded-md mt-1 bg-[#3b3b3c] w-[100%] px-2 py-3 focus:outline-none text-gray-300"
                placeholder="Enter"
                {...register("pincode", {
                  minLength: 6,
                  maxLength: 6,
                })}
              />
              {errors.pincode?.type === "maxLength" && (
                <p className="text-red-500 text-xs">Pincode must be of length 6.</p>
              )}
              {errors.pincode?.type === "minLength" && (
                <p className="text-red-500 text-xs">Pincode must be of length 6.</p>
              )}
            </div>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="address" className="font-semibold text-gray-300">
              Address
            </label>
            <div className="mb-6">
              <input
                type="text"
                className="border-[0.5px] border-slate-600 rounded-md mt-1 bg-[#3b3b3c] w-[100%] px-2 py-3 focus:outline-none text-gray-300"
                placeholder="Enter"
                {...register("address")}
              />
            </div>
          </div>
        </div>
        <div className="mb-6 text-gray-300 text-md">
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
