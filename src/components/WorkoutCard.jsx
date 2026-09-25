import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkoutCard = ({ workout }) => {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;

  return (
    <Link
      href={`/exercise/${id}`}
      className="block bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-[#ccff00]/50 transition"
    >
      {/* Image */}
      <div className="relative h-48">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Content */}

      <div className="p-5">
        {/* Category tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {muscleGroups.map((group) => (
            <span
              key={group}
              className="text-xs bg-[#ccff00] text-black px-2.5 py-0.5 rounded-full"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Name + Equipments + Stats row */}
        <h3 className="font-display text-xl font-bold uppercase mb-2">
          {name}
        </h3>

        <p className="text-sm text-neutral-400 mb-4">{equipment}</p>

        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-[#ccff00]" /> {duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame className="w-4 h-4 text-[#ccff00]" /> {caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 text-[#ccff00]" /> {rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
