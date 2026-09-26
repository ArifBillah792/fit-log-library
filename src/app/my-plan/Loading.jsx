import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-32">
      <span className="loading loading-spinner loading-lg text-[#ccff00]"></span>
      <p className="text-neutral-400">Loading workouts…</p>
    </div>
  );
};

export default Loading;
