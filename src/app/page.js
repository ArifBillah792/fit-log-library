import { getWorkouts, getWorkoutsById } from "@/library/Workouts";

const Home = async () => {
  const workouts = await getWorkouts();
  const singleWorkout = await getWorkoutsById(1);

  console.log(workouts);
  console.log(singleWorkout);

  return (
    <div>
      <h1>Found {workouts.length} workouts</h1>
    </div>
  );
};

export default Home;
