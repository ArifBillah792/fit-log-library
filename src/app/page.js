import Hero from "@/components/Hero";
import WorkoutGrid from "@/components/WorkoutGrid";
import { Suspense } from "react";

const Home = () => {
  return (
    <>
      <Hero />

      <section
        id="library"
        className="max-w-6xl mx-auto px-4 mt-12 pb-8 scroll-mt-20"
      >
        <h2 className="font-display text-3xl md:text-4xl uppercase">
          The Library
        </h2>
        <p className="text-neutral-400 mt-1 mb-6">
          Twelve lifts covering every major muscle group.
        </p>

        {/* Workout grid goes here in the next commit */}

        <Suspense
          fallback={
            <div className="flex justify-center py-20">
              <span className="loading loading-spinner loading-lg text-[#ccff00]"></span>
            </div>
          }
        >
          <WorkoutGrid />
        </Suspense>
      </section>
    </>
  );
};

export default Home;
