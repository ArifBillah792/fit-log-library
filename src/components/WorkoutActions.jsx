"use client"


import { usePlan } from "@/context/PlanContext";
import { Bookmark, CalendarPlus } from "lucide-react";
import React from "react";

const WorkoutActions = ({ workout }) => {
  const { plan, addToPlan, saveForLater } = usePlan();
  const isFull = plan.length >= 5;

  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => addToPlan(workout)}
        disabled={isFull}
        className="btn bg-[#ccff00] hover:bg-[#b8e600] text-black border-none rounded-lg disabled:bg-neutral-700 disabled:text-neutral-400"
      >
        <CalendarPlus className="w-4 h-4" />
        {isFull ? "Plan is full" : "Add to today's plan"}
      </button>

      <button
        onClick={() => saveForLater(workout)}
        className="btn btn-outline border-white text-white hover:bg-white hover:text-black rounded-lg"
      >
        <Bookmark className="w-4 h-4" />
        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;
