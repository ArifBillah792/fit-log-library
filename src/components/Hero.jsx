import { ArrowDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-8">
      <div className="grid md:grid-cols-2 items-center gap-8 bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-12">
        {/* Left: text */}

        <div>
          <p className="font-display text-sm uppercase tracking-wide text-[#ccff00] mb-4">
            Workout Library
          </p>

          <h1 className="font-display text-4xl md:text-5xl uppercase leading-tight mb-6">
            Train with intent. Log every set.
          </h1>

          <p className="text-neutral-400 mb-8 max-w-md">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a
            href="#library"
            className="btn bg-[#ccff00] hover:bg-[#b8e600] text-black border-none rounded-lg"
          >
            <ArrowDown className="w-4 h-4" />
            Browse Workouts
          </a>
        </div>

        <div className="flex justify-center">
          <Image
            src="/banner.png"
            alt="Muscle figure training on a gym machine"
            width={400}
            height={500}
            priority
            className="w-full max-w-xs md:max-w-sm h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
