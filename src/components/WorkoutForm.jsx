import { useState } from "react";
function WorkoutForm(){

    const [exercise,setExercise] =useState("");
    const [category,setCategory] =useState('chest');
    const [sets,setSets] =useState("");
    const [reps,setReps] =useState("");
    const [weight,setWeight] =useState("");
    const [date,setDate] =useState("");
    function handleWorkout(e){
        e.preventDefault();
        const newWorkout={
            id: Date.now(),
            exercise,
            category,
            sets,
            reps,
            weight,
            date
        };
        console.log(newWorkout)
        setExercise("");
        setCategory('chest');
        setSets("");
        setReps("");
        setWeight("");
        setDate("");

    }
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
            <button type="submit">Add Workout</button>
            </form>
    );
}

export default WorkoutForm;