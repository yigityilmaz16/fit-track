import {useState} from "react";
import WorkoutForm from "../Components/WorkoutForm";
import WorkoutList from "../Components/WorkoutList";
function Workouts() {
    const [workouts,setWorkouts]=useState([]);
    function addWorkout(newWorkout){
        setWorkouts((prev) => [...prev, newWorkout]);
            
    }    
    function deleteWorkout(id){
       const yeni= workouts.filter((workout)=>{
            return workout.id !== id;
        })
        setWorkouts(yeni);
    }
    console.log(workouts);
  return(
    <div>
    <WorkoutForm addWorkout={addWorkout} />
    <WorkoutList workouts={workouts} deleteWorkout={deleteWorkout} />
    </div>
  );
}

export default Workouts;