import React from "react";

export default function HorizontalRuler({ size }) {
  return (
    <div className="absolute h-0 border border-slate-700 w-full -mt-8 mb-8">
      <p className="bg-gray-900 px-1 absolute left-1/2 -top-3">{size}</p>
    </div>
  );
}
