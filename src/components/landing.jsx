import tile1 from "./News/Rectangle 66.png";
import tile2 from "./News/Rectangle 67.png";
import tile3 from "./News/Rectangle 68.png";

import "./landing.css";

function Landing() {
  return (
    <div className="landing row p-0 m-0">
      <div className="col p-0 m-0 left-landing">
        <img src={tile1} />
      </div>
      <div className="col p-0 m-0 right-landing">
          <div className="p-0 m-0">
            <img src={tile2} />
          </div>
          <div className="p-0 m-0">
            <img src={tile3} />
          </div>
      </div>
    </div>
  );
}

export default Landing;
