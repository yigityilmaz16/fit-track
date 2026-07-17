import {useState, useEffect} from "react";
import WorkoutForm from "../Components/WorkoutForm";
import WorkoutList from "../Components/WorkoutList";
function Workouts() {
    const [workouts,setWorkouts]=useState(()=>{
        const savedWorkouts= localStorage.getItem("workouts");
        return savedWorkouts
                    ? JSON.parse(savedWorkouts)
                    : []
    });
    const [editingWorkout,setEditingWorkout]=useState(null);
    function addWorkout(newWorkout){
        setWorkouts((prev) => [...prev, newWorkout]);
            
    }    
    useEffect(()=>{
        localStorage.setItem("workouts", JSON.stringify(workouts));
    },[workouts])

    function deleteWorkout(id){
       const yeni= workouts.filter((workout)=>{
            return workout.id !== id;
        })
        setWorkouts(yeni);
    }
    function startEdit(workout){
        setEditingWorkout(workout);
    }
    function updateWorkout(updatedWorkout){
        const updatesWorkout= workouts.map((workout)=>
            workout.id=== updatedWorkout.id ? updatedWorkout : workout
        );
        setWorkouts(updatesWorkout);
        setEditingWorkout(null);
    }
    console.log(workouts);
  return(
    <div>
    <WorkoutForm addWorkout={addWorkout} editingWorkout={editingWorkout} updateWorkout={updateWorkout} />
    <WorkoutList workouts={workouts} deleteWorkout={deleteWorkout} startEdit={startEdit} />
    </div>
  );
}

export default Workouts;