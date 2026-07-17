import WorkoutCard from "./WorkoutCard";
function WorkoutList({workouts, deleteWorkout, startEdit}){
if (workouts.length === 0){
    return(
        <p>Henüz Antrenman Eklenmedi</p>
    );
}
return(
    <div>
        
        {workouts.map((workout)=>{
           return <WorkoutCard workout={workout} key={workout.id} deleteWorkout={deleteWorkout} startEdit={startEdit} />
        })}
    </div>
)
}

export default WorkoutList;