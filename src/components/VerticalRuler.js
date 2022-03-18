import React from "react";

export default function VerticalRuler({ size }) {
  return (
    <div className="absolute h-full border border-slate-700 w-0 top-0 -mr-8 right-0">
      <p className="bg-gray-900 px-1 absolute top-1/2 -right-6 rotate-90">
        {size}
      </p>
    </div>
  );
}
