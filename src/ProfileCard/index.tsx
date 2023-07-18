import "./ProfileCard.css";
import ProfilePicture from "../images/image-jeremy.png";
import timeCardData from "../TimeTrackerData.json";
import { timeTrackerDataProperties } from "../App";

interface ProfileCardProps {
  setTimecardInformation: (value: timeTrackerDataProperties[]) => void;
}
const ProfileCard = ({ setTimecardInformation }: ProfileCardProps) => {
  function handleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    const reportTimeframeSelected = event.currentTarget.value;

    if (reportTimeframeSelected === "daily") {
      setTimecardInformation(timeCardData.timeTrackerData.daily);
    }

    if (reportTimeframeSelected === "weekly") {
      setTimecardInformation(timeCardData.timeTrackerData.weekly);
    }

    if (reportTimeframeSelected === "monthly") {
      setTimecardInformation(timeCardData.timeTrackerData.monthly);
    }
  }

  return (
    <div className="profile-container">
      <div className="profile-name">
        <div className="profile-picture-container">
          <img
            src={ProfilePicture}
            alt="profile-picture"
            className="profile-image"
          />
        </div>
        <div className="profile-text-information">
          <p className="report-title">Report for</p>
          <p className="report-for-name">Jeremy Robson</p>
        </div>
      </div>
      <div className="report-options-container">
        <button
          className="daily-report"
          id="daily-report"
          value={"daily"}
          onClick={handleClick}
        >
          Daily
        </button>
        <button
          className="daily-report"
          id="weekly-report"
          value={"weekly"}
          onClick={handleClick}
        >
          Weekly
        </button>
        <button
          className="daily-report"
          id="monthly-report"
          value={"monthly"}
          onClick={handleClick}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
