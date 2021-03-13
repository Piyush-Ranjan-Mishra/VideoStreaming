import { lazy } from "react";

const Button = lazy(() => import("../button"));
const HeroComponent = () => {
  return (
    <>
      <div className="hero-background">
        <div className="hero-content">
          <div className="hero-title-content">
            <div className="hero-title">FS1</div>
            <Button>LIVE</Button>
            <div className="hero-timing"> 11:00a - 12:00p</div>
          </div>
          <div className="hero-program">
            Buccaneers <br></br>Vs Saints
          </div>
          <div className="hero-title-content">
            <Button tabIndex={1}>Purchase $4.99</Button>
            <Button tabIndex={2}>Subscribe </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroComponent;
