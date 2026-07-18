import { useContext, useState } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
import WorkoutCard from "./WorkoutCard";
function WorkoutList(){
const {
    workouts,
    deleteWorkout,
    startEdit
} = useContext(WorkoutContext);
const [searchTerm,setSearchTerm]=useState("");
const filteredWorkouts = workouts.filter((workout) => {
  return workout.exercise
    .toLowerCase()
    .includes(searchTerm.toLowerCase());
});
return(
    <div>
        <input type="text" placeholder="Search Exercise" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}></input>
        {filteredWorkouts.length===0 ?   <p>No Workouts Found</p> :  filteredWorkouts.map((workout)=>{
           return <WorkoutCard workout={workout} key={workout.id}  />
        })}
        
   
    </div>
)
}

export default WorkoutList;