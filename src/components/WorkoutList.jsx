import WorkoutCard from "./WorkoutCard";
function WorkoutList({workouts, deleteWorkout}){
if (workouts.length === 0){
    return(
        <p>Henüz Antrenman Eklenmedi</p>
    );
}
return(
    <div>
        {workouts.map((workout)=>{
           return <WorkoutCard workout={workout} key={workout.id} deleteWorkout={deleteWorkout} />
        })}
    </div>
)
}

export default WorkoutList;