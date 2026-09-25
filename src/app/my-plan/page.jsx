"use client";

import { usePlan } from "@/context/PlanContext";
import React from "react";

const MyPlan = () => {
  const { plan } = usePlan();

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
    </section>
  );
};

export default MyPlan;
