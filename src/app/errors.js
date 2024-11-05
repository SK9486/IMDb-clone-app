'use client';
import { useEffect } from "react";
function  Errors({error,reset}) {
    useEffect(()=>{
        console.log(error);
    },[error])
  return (
    <div className="text-center mt-10">
        <h1>Something went wrong</h1>
        <button onClick={()=>{
            reset()
        }} className="bg-red-600 font-semibold p-5 rounded-md hover:bg-red-500 hover:text-gray-800">
            Try Again
        </button>
    </div>
  )
}

export default Errors;