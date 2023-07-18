import { useState } from "react";
import "./App.css";
import ProfileCard from "./ProfileCard";
import TimeTrackerCard from "./TimeTrackerCard";

export interface timeTrackerDataProperties {
  reportType: string;
  timeCardIcon: string;
  amountOfHours: string;
  previousWeekAmountOfHours: string;
  backgroundColor: string;
}
function App() {
  const [timecardInformation, setTimecardInformation] = useState<
    timeTrackerDataProperties[]
  >([]);

  return (
    <>
      <div className="dashboard-container">
        <ProfileCard setTimecardInformation={setTimecardInformation} />

        {timecardInformation &&
          timecardInformation.map((eachTimeCard) => (
            <TimeTrackerCard
              key={eachTimeCard.reportType}
              reportType={eachTimeCard.reportType}
              timeCardIcon={eachTimeCard.timeCardIcon}
              amountOfHours={eachTimeCard.amountOfHours}
              previousWeekAmountOfHours={eachTimeCard.previousWeekAmountOfHours}
              backgroundColor={eachTimeCard.backgroundColor}
            />
          ))}
      </div>
    </>
  );
}

export default App;
