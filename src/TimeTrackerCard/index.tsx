import "./TimeTracterCard.css";
import Elipsis from "../images/icon-ellipsis.svg";

const TimeTrackerCard = () => {
  return (
    <div className="time-card">
      <div className="time-card-information">
        <div className="card-title-container">
          <p className="card-title">Work</p>
          <img src={Elipsis} alt="elipsis" className="elipsis-image" />
        </div>
      </div>
    </div>
  );
};

export default TimeTrackerCard;
