import { getWorkoutsById } from "@/library/Workouts";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const WorkoutDetails = async ({ params }) => {
  const { id } = await params;
  const workout = await getWorkoutsById(id);

  if (!workout) {
    notFound();
  }

  const specs = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: workout.sets },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: workout.rating },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: image */}

        <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[600px] rounded-2xl overflow-hidden border border-neutral-800">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right: details */}

        <div>
          <h1 className="font-display text-4xl md:text-5xl uppercase mb-3">
            {workout.name}
          </h1>

          <p className="text-neutral-400 mb-4">{workout.description}</p>

          {/* Category tags */}

          <div className="flex flex-wrap gap-2 mb-6">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="bg-[#ccff00] text-black text-sm px-3 py-0.5 rounded-full"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Key specs table */}

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl mb-8">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="grid grid-cols-2 px-4 py-3 border-b border-neutral-800 last:border-b-0"
              >
                <span className="font-display uppercase text-sm">
                  {spec.label}
                </span>
                <span>{spec.value}</span>
              </div>
            ))}
          </div>

          {/* Instructions */}

          <h2 className="font-display text-2xl uppercase mb-3">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 mb-8">
            {workout.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetails;
