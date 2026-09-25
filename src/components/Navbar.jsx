"use client";

import { usePlan } from "@/context/PlanContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const { plan, saved } = usePlan();

  const links = [
    { name: "Workouts", href: "/" },
    { name: "My Plan", href: "/my-plan" },
  ];

  return (
    <div className="bg-neutral-950 border-b border-neutral-800">
      <div className="navbar max-w-6xl mx-auto px-4">
        {/* Left side: mobile hamburger dropdown + logo */}
        <div className="navbar-start gap-2">
          {/* Mobile dropdown menu — only visible below the lg breakpoint */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-square"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-neutral-900 rounded-box z-10 mt-3 w-40 p-2 shadow"
            >
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={
                        isActive ? "text-[#ccff00] font-semibold" : "text-white"
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="FitLog logo" width={28} height={28} />
            <span className="font-display text-xl font-bold tracking-wide text-white">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Center: nav links — desktop only (lg and up) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={
                      isActive
                        ? "bg-neutral-800 text-[#ccff00] font-semibold rounded-lg"
                        : "text-white/70 hover:text-white"
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right side: Plan and Saved badges */}
        <div className="navbar-end gap-2">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm font-semibold"
          >
            Plan
            <span className="badge bg-[#ccff00] text-black border-none">
              {plan.length}
            </span>
          </Link>
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm font-semibold"
          >
            Saved
            <span className="badge badge-outline">{saved.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
