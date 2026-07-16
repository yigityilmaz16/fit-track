import {useState} from "react";
import WorkoutForm from "../Components/WorkoutForm";
import WorkoutList from "../Components/WorkoutList";
function Workouts() {
    const [workouts,setWorkouts]=useState([]);
    function addWorkout(newWorkout){
        setWorkouts((prev) => [...prev, newWorkout]);
            
    }    
    console.log(workouts);
  return(
    <div>
    <WorkoutForm addWorkout={addWorkout} />
    <WorkoutList workouts={workouts} />
    </div>
  );
}

export default Workouts;