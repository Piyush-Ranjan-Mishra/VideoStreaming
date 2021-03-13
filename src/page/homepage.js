import { lazy } from "react";

const HeroComponent = lazy(() => import("../component/hero/hero"));
const VideoLists = lazy(() => import("../component/videolist/VideoLists"));

const HomePage = () => {
  return (
    <>
      <HeroComponent />
      <VideoLists />
    </>
  );
};

export default HomePage;
