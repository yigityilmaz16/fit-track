import { createContext, useState, useEffect } from "react";

export const WorkoutContext = createContext();

function WorkoutProvider({ children }) {
   const [workouts,setWorkouts]=useState(()=>{
           const savedWorkouts= localStorage.getItem("workouts");
           return savedWorkouts
                       ? JSON.parse(savedWorkouts)
                       : []
       });
    const [editingWorkout, setEditingWorkout] = useState(null);
     useEffect(()=>{
            localStorage.setItem("workouts", JSON.stringify(workouts));
        },[workouts])
    function addWorkout(newWorkout) {
    setWorkouts((prev) => [...prev, newWorkout]);
}

function deleteWorkout(id) {
    const yeni = workouts.filter((workout) => {
        return workout.id !== id;
    });

    setWorkouts(yeni);
}

function startEdit(workout) {
    setEditingWorkout(workout);
}

function updateWorkout(updatedWorkout) {
    const updatedWorkouts = workouts.map((workout) =>
        workout.id === updatedWorkout.id
            ? updatedWorkout
            : workout
    );

    setWorkouts(updatedWorkouts);
    setEditingWorkout(null);
}
    return (
        <WorkoutContext.Provider value={{
    workouts,
    editingWorkout,
    addWorkout,
    deleteWorkout,
    startEdit,
    updateWorkout
}}>
            {children}
        </WorkoutContext.Provider>
    );
}

export default WorkoutProvider;