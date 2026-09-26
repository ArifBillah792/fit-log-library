"use client";

import PlanCard from "@/components/PlanCard";
import { usePlan } from "@/context/PlanContext";
import Link from "next/link";
import { useState } from "react";

const MyPlan = () => {
  const { plan, saved } = usePlan();
  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const totalMinutes = plan.reduce((sum, item) => sum + item.duration, 0);
  const totalCalories = plan.reduce(
    (sum, item) => sum + item.caloriesBurned,
    0,
  );

  const metrics = [
    { label: "Exercises", value: plan.length, highlight: true },
    { label: "Minutes", value: totalMinutes },
    { label: "Calories", value: totalCalories },
  ];

  const currentList = activeTab === "plan" ? plan : saved;

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") return a.duration - b.duration;
    if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
    return b.rating - a.rating;
  });

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="font-display text-4xl md:text-5xl uppercase">My Plan</h1>
      <p className="text-neutral-400 mt-1 mb-6">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Metrics */}

      <div className="grid grid-cols-3 bg-neutral-900 border border-neutral-800 rounded-xl mb-8">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="p-4 md:p-6 border-r border-dashed border-neutral-700 last:border-r-0"
          >
            <p className="text-xs md:text-sm text-neutral-400">
              {metric.label}
            </p>
            <p
              className={`text-3xl md:text-4xl font-bold mt-1 ${
                metric.highlight ? "text-[#ccff00]" : ""
              }`}
            >
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      {/* Tabs + Sort */}

      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        {/* Tabs */}

        <div className="flex bg-neutral-900 border border-neutral-800 rounded-xl p-1">
          <button
            onClick={() => setActiveTab("plan")}
            className={`px-4 py-2 rounded-lg text-sm ${
              activeTab === "plan"
                ? "bg-neutral-800 text-[#ccff00]"
                : "text-neutral-400"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`px-4 py-2 rounded-lg text-sm ${
              activeTab === "saved"
                ? "bg-neutral-800 text-[#ccff00]"
                : "text-neutral-400"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort dropdown */}

        <label className="flex flex-col gap-1 w-full sm:w-64">
          <span className="text-sm">Sort By</span>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select bg-neutral-900 border-neutral-800 rounded-xl w-full"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>

      {/* Workout list or empty state */}

      {sortedList.length === 0 ? (
        <div className="border-2 border-dashed border-neutral-800 rounded-xl py-20 px-4 text-center">
          <h2 className="font-display text-2xl uppercase mb-2">
            Nothing here yet
          </h2>
          <p className="text-neutral-400 text-sm mb-6">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="btn bg-[#ccff00] hover:bg-[#b8e600] text-black border-none rounded-full"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedList.map((workout) => (
            <PlanCard key={workout.id} workout={workout} type={activeTab} />
          ))}
        </div>
      )}
    </section>
  );
};

export default MyPlan;
