import React from "react";
import { MoveRight } from "lucide-react";
function CardTextContent(props) {
  console.log(props.user);
  console.log("Index:", props.index);
  

  return (
    <div className="">
      <div className="absolute top-0">
        <div className="h-10  w-10 rounded-full border-2  bg-white text-black flex justify-center items-center text-3xl m-4 ml-4">
          {props.index+1}
        </div>
        {/* ================================== */}
        {/* text-content */}
        <div className="text-lg text-white w-fit px-10  mt-45 font-medium" >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          maxime cum sapiente, tempore 
        </div>
        {/* ------------------------------------ */}
        <div className="w-35 flex gap-6 bg-blue-800 rounded-4xl p-2   text-lg text-white ml-10  mt-10">
          <button>{props.user.tag}</button>
          {/* <button>
            <MoveRight />
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default CardTextContent;
