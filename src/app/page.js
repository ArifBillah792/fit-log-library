import {getWorkouts} from "@/library/Workouts";

const Home = async () => {
  const workouts = await getWorkouts();

  return (
    <div>
      <h1>Found {workouts.length} workouts</h1>
    </div>
  );
};

export default Home;
