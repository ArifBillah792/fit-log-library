import { getWorkouts } from "@/library/Workouts";
import React from "react";
import WorkoutCard from "./WorkoutCard";

const WorkoutGrid = async () => {
  const workouts = await getWorkouts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
};

export default WorkoutGrid;
