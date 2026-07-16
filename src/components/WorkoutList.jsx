import WorkoutCard from "./WorkoutCard";
function WorkoutList({workouts}){
if (workouts.length === 0){
    return(
        <p>Henüz Antrenman Eklenmedi</p>
    );
}
return(
    <div>
        {workouts.map((workout)=>{
           return <WorkoutCard workout={workout} key={workout.id} />
        })}
    </div>
)
}

export default WorkoutList;