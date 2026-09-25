

const getWorkouts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if(!res.ok) {
    throw new Error ("Failed to fetch workouts");
  }

  return res.json();

};

const getWorkoutsById = async (id) => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  if(!res.ok) {
    throw new Error (`Failed to fetch workout ${id}`);
  }

  return res.json();

};


export { getWorkouts, getWorkoutsById };
