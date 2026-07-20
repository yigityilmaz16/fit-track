import "./WorkoutCard.css";
import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
function WorkoutCard({workout}){
    const { deleteWorkout, startEdit } = useContext(WorkoutContext);
    return(
        <div className="workout-card">

            <p>{workout.exercise}</p>
            <p>{workout.category}</p>
            <p>{workout.sets}</p>
            <p>{workout.reps}</p>
            <p>{workout.weight}</p>
            <p>{workout.date}</p>
            <button className="card-button delete-button" onClick={()=>deleteWorkout(workout.id)}>Delete</button>
            <button className="card-button edit-button" onClick={()=>startEdit(workout)}>Edit</button>
        </div>
    )
}
export default WorkoutCard;
