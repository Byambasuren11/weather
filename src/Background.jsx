import React from "react"
import Left from "./icons/Left-Pine-Cone-Logo"
import Right from "./icons/Right-Pine-Cone-Logo"
const Background=()=>(

<div className="rounded-full w-[1200px] h-[1200px] border border-grey-300 absolute z-1 flex justify-center items-center">
<div className="rounded-full w-[900px] h-[900px] border border-grey-300 absolute z-1 flex justify-center items-center">
  <div className="rounded-full w-[600px] h-[600px] border border-grey-300 absolute z-1 flex justify-center items-center ">
    <div className="rounded-full w-[300px] h-[300px] border border-grey-300 absolute z-2 flex justify-center items-center">
      <div className="w-[190px] h-[190px] flex justify-center items-center absolute right0 bg-gray-100 overflow-hidden">
        <div className="w-[150px] h-[135px] absolute bg-gray-900 rounded-full top-0 right-0 mt-[-88px] mr-[-52px]"></div>
        <div className="w-[150px] h-[135px] absolute bg-gray-900  rounded-full bottom-0 right-0 mb-[-88px] mr-[-52px]"></div>
        <div className="w-[70px] h-[135px] flex justify-end items-end bg-gray-900 absolute right-0"></div>
        <div className="rounded-full w-[130px] h-[130px] border border-grey-300 absolute z-1 flex justify-center items-center bg-gray-100 gap-4">
          <Left />
          <Right />
        </div>
      </div>
    </div>
  </div>
</div>
</div>
)
export default Background