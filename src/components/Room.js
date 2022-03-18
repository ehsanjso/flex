import React from "react";
import Grid from "./Grid";
import HorizontalRuler from "./HorizontalRuler";
import VerticalRuler from "./VerticalRuler";

export default function Room() {
  return (
    <div className="w-full h-full relative border-slate-800 border-4 rounded-md shadow-md">
      <HorizontalRuler size="20m" />
      <Grid size={20} />
      <VerticalRuler size="10m" />
    </div>
  );
}
