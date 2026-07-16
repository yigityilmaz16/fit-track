import "./WorkoutCard.css";

function WorkoutCard({workout}){
    return(
        <div className="workout-card">
            <p>{workout.exercise}</p>
            <p>{workout.category}</p>
            <p>{workout.sets}</p>
            <p>{workout.reps}</p>
            <p>{workout.weight}</p>
            <p>{workout.date}</p>
        </div>
    )
}
export default WorkoutCard;
