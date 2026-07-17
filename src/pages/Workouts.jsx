import { useContext } from "react";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutList from "../components/WorkoutList";
import { WorkoutContext } from "../context/WorkoutContext";

function Workouts() {
  const {
    workouts,
    editingWorkout,
    addWorkout,
    deleteWorkout,
    startEdit,
    updateWorkout
} = useContext(WorkoutContext);
  return(
    <div>
    <WorkoutForm addWorkout={addWorkout} editingWorkout={editingWorkout} updateWorkout={updateWorkout} />
    <WorkoutList workouts={workouts} deleteWorkout={deleteWorkout} startEdit={startEdit} />
    </div>
  );
}

export default Workouts;