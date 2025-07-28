// src/components/ui/button-4.tsx
import React from "react";

interface Button4Props {
  label: string;
}

export const Component = ({ label }: Button4Props) => {
  // Use green-400 for both background and border, green-500 on hover
  const baseColor = "green-400";
  const hoverColor = "green-500";
  const textColor = "text-black";

  return (
    <>
      <button className='group relative'>
        <div
          className={`relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-full
        bg-${baseColor} border-${baseColor} border-2 px-6 font-medium ${textColor} transition-all duration-300 group-hover:bg-${hoverColor} group-hover:text-white group-hover:-translate-x-3 group-hover:-translate-y-3`}
        >
          {label}
        </div>
        <div className={`absolute inset-0 z-0 h-full w-full rounded-full transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#16a34a,10px_10px_#22c55e,15px_15px_#bbf7d0]`}></div>
      </button>
    </>
  );
};