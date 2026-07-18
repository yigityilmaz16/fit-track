import "./Dashboard.css";
import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";

function Dashboard() {
  const {workouts} = useContext(WorkoutContext);
  const totalSets= workouts.reduce((acc,workout)=>{
    return acc+ workout.sets
  },0)
  const totalVolume= workouts.reduce((acc,workout)=>{
    return acc+(workout.weight * workout.reps * workout.sets )
  },0)
  const lastWorkout =
  workouts.length > 0
    ? workouts.reduce((acc, workout) => {
        return acc.date > workout.date ? acc : workout;
      }, workouts[0])
    : null;
  return (
    <>
          <h1>FitTrack Dashboard</h1>
    <div className="dashboard">
      <div className="stat-card">
        <h3>Total Workout</h3>
        <p>{workouts.length}</p>
      </div>
      <div className="stat-card">
        <h3>Total Sets</h3>
        <p>{totalSets}</p>
      </div>
      <div className="stat-card">
        <h3>Total Volume</h3>
        <p>{totalVolume}</p>
      </div>
      <div className="stat-card">
        <h3>Son Antrenman</h3>
        <p>
            {lastWorkout
         ? `${lastWorkout.exercise} , ${lastWorkout.date}`
         : "Henüz antrenman yok"}
       </p>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
