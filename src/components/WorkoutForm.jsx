import { useState, useEffect } from "react";
function WorkoutForm({addWorkout, editingWorkout,updateWorkout}){

    const [exercise,setExercise] =useState("");
    const [category,setCategory] =useState('chest');
    const [sets,setSets] =useState("");
    const [reps,setReps] =useState("");
    const [weight,setWeight] =useState("");
    const [date,setDate] =useState("");
    function handleWorkout(e){
        e.preventDefault();
        const newWorkout={
            exercise,
            category,
            sets,
            reps,
            weight,
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
            <form onSubmit={handleWorkout}>
            <input type="text" placeholder="Exercise Name" value={exercise} onChange={(e)=>setExercise(e.target.value)}></input>
            <select name="Category" value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="chest">Chest</option>
                <option value="back">Back</option>
                <option value="legs">Legs</option>
                <option value="shoulder">Shoulder</option>
                <option value="arms">Arms</option>
                <option value="cardio">Cardio</option>
            </select>
            <input type="number" placeholder="Set" value={sets} onChange={(e)=>setSets(e.target.value)}></input>
            <input type="number" placeholder="Reps" value={reps} onChange={(e)=>setReps(e.target.value)}></input>
            <input type="number" placeholder="Weight" value={weight} onChange={(e)=>setWeight(e.target.value)}></input>
            <input type="date" placeholder="Date" value={date} onChange={(e)=>setDate(e.target.value)}></input>
            <button type="submit">{editingWorkout ? "Edit" : "Add"}</button>
            </form>
    );
}

export default WorkoutForm;