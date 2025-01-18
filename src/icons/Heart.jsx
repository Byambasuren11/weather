import * as React from "react";
const Heart = (props) => (
  <div className=" ">
  
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="32"
    fill="none"
    viewBox="0 0 33 32"
    onClick={props.onClick}
  >

    <path
      stroke="#D1D5DB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15.916 7.369a1 1 0 0 0 1.501 0 7 7 0 0 1 10.83 8.858l-6.06 8a7 7 0 0 1-11.2-.054l-5.94-8a7 7 0 0 1 10.869-8.804"
    ></path>
  </svg>
  {/* <div className="w-[150px] h-[150px]">
x
  </div> */}
  </div>
);

export default Heart;
