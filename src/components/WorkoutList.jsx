import { useContext, useState, useEffect } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
import WorkoutCard from "./WorkoutCard";
function WorkoutList(){
const {
    workouts,
} = useContext(WorkoutContext);
const [searchTerm,setSearchTerm]=useState("");
const [filterTerm,setFilterTerm]=useState("");
const searchedWorkouts = workouts.filter((workout) => {
  return workout.exercise.toLowerCase().includes(searchTerm.toLowerCase()) && (filterTerm==="" || workout.category.includes(filterTerm)) ;
});
return(
    <div className="workout-list">
        <input className="search-field" type="text" placeholder="Search Exercise" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}></input>
        <select className="filter-field" name="Category" value={filterTerm} onChange={(e)=>setFilterTerm(e.target.value)}>
            <option value="">All</option>
            <option value="chest">Chest</option>
            <option value="back">Back</option>
            <option value="legs">Legs</option>
            <option value="shoulder">Shoulder</option>
            <option value="arms">Arms</option>
            <option value="cardio">Cardio</option>
        </select>
        {searchedWorkouts.length===0 ?   <p className="empty-state">No Workouts Found</p> :  searchedWorkouts.map((workout)=>{
           return <WorkoutCard workout={workout} key={workout.id}  />
        })}
        
   
    </div>
)
}

export default WorkoutList;
