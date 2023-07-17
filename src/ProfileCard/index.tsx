import "./ProfileCard.css";
import ProfilePicture from "../images/image-jeremy.png";

const ProfileCard = () => {
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
        <button className="daily-report" id="daily-report">
          Daily
        </button>
        <button className="daily-report" id="weekly-report">
          Weekly
        </button>
        <button className="daily-report" id="monthly-report">
          Monthly
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
