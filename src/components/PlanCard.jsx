"use client";

import { usePlan } from "@/context/PlanContext";
import { Check, Clock, Flame, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PlanCard = ({ workout, type }) => {
  const { id, name, image, equipment, duration, caloriesBurned, rating } =
    workout;
  const { done, markAsDone, removeFromPlan, removeFromSaved } = usePlan();

  const isDone = done.includes(id);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
      {/* Thumbnail */}
      <div className="relative w-full sm:w-36 h-40 sm:h-24 rounded-lg overflow-hidden shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          sizes="144px"
          className="object-cover"
        />
      </div>

      {/* Info */}

      <div className="flex-1">
        <h3 className="font-display text-xl uppercase">{name}</h3>
        <p className="text-sm text-neutral-400 mb-2">{equipment}</p>

        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-[#ccff00]" />
            {duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame className="w-4 h-4 text-[#ccff00]" />
            {caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 text-[#ccff00]" />
            {rating}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Link
          href={`/exercise/${id}`}
          className="btn btn-sm btn-outline border-white text-white hover:bg-white hover:text-black rounded-full"
        >
          View Details
        </Link>
        {type === "plan" && (
          <button
            onClick={() => markAsDone(id)}
            disabled={isDone}
            className="btn btn-sm bg-[#ccff00] hover:bg-[#b8e600] text-black border-none rounded-full disabled:bg-neutral-700 disabled:text-[#ccff00]"
          >
            <Check className="w-4 h-4" />
            {isDone ? "Done" : "Mark as Done"}
          </button>
        )}

        <button
          onClick={() =>
            type === "plan" ? removeFromPlan(id) : removeFromSaved(id)
          }
          className="btn btn-sm btn-ghost btn-square text-white"
          aria-label="Remove"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
