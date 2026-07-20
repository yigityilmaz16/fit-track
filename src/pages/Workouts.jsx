import WorkoutForm from "../components/WorkoutForm";
import WorkoutList from "../components/WorkoutList";

function Workouts() {
    return (
        <div className="workouts-page">
            <WorkoutForm />
            <WorkoutList />
        </div>
    );
}

export default Workouts;
