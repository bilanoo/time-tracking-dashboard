import "./TimeTracterCard.css";
import Elipsis from "../images/icon-ellipsis.svg";

interface TimeTrackerCard {
  reportType: string;
  timeCardIcon: string;
  amountOfHours: string;
  previousWeekAmountOfHours: string;
  backgroundColor: string;
}
const TimeTrackerCard = ({
  reportType,
  timeCardIcon,
  amountOfHours,
  previousWeekAmountOfHours,
  backgroundColor,
}: TimeTrackerCard) => {
  return (
    <div className="time-card" style={{ backgroundColor }}>
      <div className="time-card-icon-container">
        <img
          src={timeCardIcon}
          alt="time-card-icon"
          className="time-card-icon"
        />
      </div>
      <div className="time-card-information" draggable>
        <div className="card-title-container">
          <p className="card-title">{reportType}</p>
          <img src={Elipsis} alt="elipsis" className="elipsis-image" />
        </div>
        <div className="time-spent-container">
          <p className="hours">{amountOfHours}hrs</p>
          <p className="previous-time">
            Last Week - {previousWeekAmountOfHours}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeTrackerCard;
