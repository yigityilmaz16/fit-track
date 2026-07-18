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
  const mostTrained= 
  workouts.length > 0
    ? workouts.reduce((acc,workout) => {
     if(workout.category === "chest"){
      acc.chest+=1;
     }else if(workout.category === "back"){
      acc.back+=1;
     }else if(workout.category === "shoulder"){
      acc.shoulder+=1;
     }else if(workout.category === "legs"){
      acc.legs+=1;
     }else if(workout.category === "arms"){
      acc.arms+=1
     }else{
      acc.cardio+=1;
     }
     return acc;
    }, {
  chest: 0,
  back: 0,
  shoulder: 0,
  legs: 0,
  arms: 0,
  cardio: 0
})
    : null;
const winner = Object.entries(mostTrained).reduce((acc, current) => {

    if ( current[1]>acc[1] ) {
        return current;
    }

    return acc;

});

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
         : "No Workouts Yet"}
       </p>
      </div>
      <div className="stat-card">
        <h3>🏆 Most Trained</h3>
        <p>{winner[0]}</p>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
