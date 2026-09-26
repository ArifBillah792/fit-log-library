import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center">
      {/* 404 */}

      <h1 className="text-8xl font-extrabold tracking-tight text-white sm:text-9xl">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-bold uppercase tracking-wide text-slate-100 sm:text-3xl">
        PAGE NOT FOUND
      </h2>

      <p className="mt-4 max-w-md text-base leading-7 text-slate-400 sm:text-lg">
        Sorry, the page you are looking for doesn't exist or may have been
        moved.
      </p>

      {/* Home Button */}

      <Link
        href="/"
        className="mt-8 rounded-lg bg-green-600 px-7 py-3 font-semibold text-white shadow-sm transition duration-200 hover:bg-green-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
