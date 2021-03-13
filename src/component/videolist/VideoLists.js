import { lazy, useRef } from "react";
import videoConfigs from "../../utils/DummyListData";

const SingleVideoCard = lazy(() => import("./SingleVideoCard"));

function convertUnicode(input) {
  return input.replace(/\\u(\w\w\w\w)/g, function (a, b) {
    var charcode = parseInt(b, 16);
    return String.fromCharCode(charcode);
  });
}

const VideoLists = () => {
  const ref = useRef();
  const onClickLeft = () => {
    console.log("ref", ref);
    ref.current.scrollLeft -= 300;
  };
  const onClickRight = () => {
    ref.current.scrollLeft += 300;
  };
  return (
    <div testID="videolist" className="video-list-row" ref={ref}>
      <div id="leftArrow" onClick={onClickLeft}>
        {convertUnicode("\u1438")}
      </div>
      {videoConfigs.map((videoConfig, index) => (
        <SingleVideoCard
          videoConfig={videoConfig}
          tabIndex={0}
          key={`video${index}`}
        />
      ))}

      <div id="rightArrow" onClick={onClickRight}>
        {convertUnicode("\u1433")}
      </div>

      <div className="video-background"></div>
    </div>
  );
};

export default VideoLists;
