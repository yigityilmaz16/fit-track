import { useState, useEffect, useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
function WorkoutForm(){
    const {
    addWorkout,
    editingWorkout,
    updateWorkout
    } = useContext(WorkoutContext);
    const [exercise,setExercise] =useState("");
    const [category,setCategory] =useState('chest');
    const [sets,setSets] =useState("");
    const [reps,setReps] =useState("");
    const [weight,setWeight] =useState("");
    const [date,setDate] =useState("");
    function handleWorkout(e){
        e.preventDefault();
         if (exercise.trim() === "") {
            alert("Exercise name cannot be empty.");
             return;
            }

         if (Number(sets) < 1) {
             alert("Sets must be at least 1.");
             return;
             }

         if (Number(reps) < 1) {
              alert("Reps must be at least 1.");
              return;
             }

         if (Number(weight) < 0) {
              alert("Weight cannot be negative.");
                 return;
            }
         if (date === "") {
             alert("Date must be selected.");
                 return;
            }
       const newWorkout = {
             exercise: exercise.trim(),
             category,
             sets: Number(sets),
             reps: Number(reps),
             weight: Number(weight),
             date
            };
        if(editingWorkout){
            newWorkout.id=editingWorkout.id;
            updateWorkout(newWorkout);
            
        }else{
        newWorkout.id=Date.now();
        addWorkout(newWorkout);
        }
        setExercise("");
        setCategory('chest');
        setSets("");
        setReps("");
        setWeight("");
        setDate("");
    }
    useEffect(()=>{
      if(editingWorkout){
        setExercise(editingWorkout.exercise);
        setCategory(editingWorkout.category);
        setSets(editingWorkout.sets);
        setReps(editingWorkout.reps);
        setWeight(editingWorkout.weight);
        setDate(editingWorkout.date);
       
      }
        
    },[editingWorkout])
    return(
            <form className="workout-form" onSubmit={handleWorkout}>
            <input className="field field-exercise" type="text" placeholder="Exercise Name" required value={exercise} onChange={(e)=>setExercise(e.target.value)}></input>
            <select className="field" name="Category" value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="chest">Chest</option>
                <option value="back">Back</option>
                <option value="legs">Legs</option>
                <option value="shoulder">Shoulder</option>
                <option value="arms">Arms</option>
                <option value="cardio">Cardio</option>
            </select>
            <input className="field" type="number" placeholder="Set" min="1" value={sets} onChange={(e)=>setSets(e.target.value)}></input>
            <input className="field" type="number" placeholder="Reps" min="1" value={reps} onChange={(e)=>setReps(e.target.value)}></input>
            <input className="field" type="number" placeholder="Weight" min="0" value={weight} onChange={(e)=>setWeight(e.target.value)}></input>
            <input className="field field-date" type="date" placeholder="Date" required  value={date} onChange={(e)=>setDate(e.target.value)}></input>
            <button className="primary-button" type="submit">{editingWorkout ? "Edit" : "Add"}</button>
            </form>
    );
}

export default WorkoutForm;
