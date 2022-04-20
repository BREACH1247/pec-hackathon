import tile1 from "./News/Rectangle 66.png";
import tile2 from "./News/Rectangle 67.png";
import tile3 from "./News/Rectangle 68.png";

import "./landing.css";

function Landing() {
  return (
    <div className="landing row p-0 m-0">
      <div className="col-8 p-0 m-0 left-landing landing-img">
      <div className="landing-txt">UPDATE II NOW LIVE</div>
        <img src={tile1} />
      </div>
      <div className="col-4 p-0 m-0 right-landing">
          <div className="p-0 m-0 landing-img">
            <div className="landing-txt">Taurus Mining ventures operation concludes.</div>
            <img src={tile2} />
          </div>
          <div className="p-0 m-0 landing-img">
          <div className="landing-txt">Marinists hold public referendum.</div>
            <img src={tile3} />
          </div>
      </div>
    </div>
  );
}

export default Landing;
