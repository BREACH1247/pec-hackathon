import galaxyimg from "./Footer and Navbar/GalaxyWars.png";
import acmimg from "./Footer and Navbar/ACM2.png";

import fb from "./Footer and Navbar/Vector.png";
import twitter from "./Footer and Navbar/Twitter.png";
import ig from "./Footer and Navbar/Instagram.png";
import yt from "./Footer and Navbar/Youtube.png";
import reddit from "./Footer and Navbar/Vector (3).png";

import ps4 from "./Footer and Navbar/PS4.png";
import steam from "./Footer and Navbar/Steam.png";
import xbox from "./Footer and Navbar/X-box.png";
import epic from "./Footer and Navbar/EpicGames.png";

import copyright from "./Footer and Navbar/copyright.png";

function Footer() {
  return (
    <footer className="d-flex justify-content-around">
      <div class="footer-img">
        <img src={galaxyimg} />
      </div>
      <div class="copyright-footer">
        <div>
          <ul className="d-flex justify-content-start">
            <li className="p-2">GALAXY WARS</li>
            <li className="p-2">About Us</li>
            <li className="p-2">Store</li>
            <li className="p-2">Login</li>
          </ul>
        </div>
        <div>
          <ul className="d-flex justify-content-start">
            <li className="p-2">
              <img src={fb} />
            </li>
            <li className="p-2">
              <img src={twitter} />
            </li>
            <li className="p-2">
              <img src={ig} />
            </li>
            <li className="p-2">
              <img src={yt} />
            </li>
            <li className="p-2">
              <img src={reddit} />
            </li>
          </ul>
        </div>
        <div>
          <ul className="d-flex justify-content-start">
            <li className="p-2">
              <img src={ps4} />
            </li>
            <li className="p-2">
              <img src={steam} />
            </li>
            <li className="p-2">
              <img src={xbox} />
            </li>
            <li className="p-2">
              <img src={epic} />
            </li>
          </ul>
        </div>
        <div>
            <img src={copyright} />
        </div>
      </div>
      <div class="acm">
        <img src={acmimg} />
      </div>
    </footer>
  );
}

export default Footer;
