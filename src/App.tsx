import "./App.css";
import ProfileCard from "./ProfileCard";
import TimeTrackerCard from "./TimeTrackerCard";

function App() {
  return (
    <>
      <div className="dashboard-container">
        <ProfileCard />
        <div className="all-time-cards-container">
          <TimeTrackerCard />
        </div>
      </div>
    </>
  );
}

export default App;
