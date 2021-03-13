import ProgressBar from "../ProgressBar";

const SingleVideoCard = ({ videoConfig, tabIndex }) => {
  return (
    <>
      <div testID="video" tabIndex={tabIndex} className="video-list-column">
        <div
          className="video-card"
          style={{
            backgroundImage: `url("${videoConfig.image}")`,
          }}
        >
          {videoConfig.lock && <div testID="lock" className="lock"></div>}
          <ProgressBar value={videoConfig.progress} />
        </div>
        <div>Lorem ipsum dolor sit amet</div>
      </div>
    </>
  );
};

export default SingleVideoCard;
