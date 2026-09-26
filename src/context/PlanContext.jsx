"use client";

import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const PlanContext = createContext(null);

export const PlanProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [done, setDone] = useState([]);

  const addToPlan = (workout) => {
    if (plan.some((item) => item.id === workout.id)) {
      toast.error("Already in today's plan");
      return;
    }

    if (plan.length >= 5) {
      toast.error("Today's plan is full — finish a lift first");

      return;
    }

    setPlan([...plan, workout]);
    toast.success("Added to today's plan");
  };

  const saveForLater = (workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      toast.error("Already Saved");
      return;
    }

    setSaved([...saved, workout]);
    toast.success("Saved For Later");
  };

  const removeFromPlan = (id) => {
    setPlan(plan.filter((item) => item.id !== id));
    setDone(done.filter((doneId) => doneId !== id));
    toast.success("Removed from today's plan");
  };

  const removeFromSaved = (id) => {
    setSaved(saved.filter((item) => item.id !== id));
    toast.success("Removed from saved");
  };

  const markAsDone = (id) => {
    if (done.includes(id)) return;
    setDone([...done, id]);
    toast.success("Lift done — nice work!");
  };

  const value = {
    plan,
    saved,
    done,
    addToPlan,
    saveForLater,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
};

export const usePlan = () => useContext(PlanContext);

export default PlanContext;
