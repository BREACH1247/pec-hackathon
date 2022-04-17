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

import acmcol from "./Footer and Navbar/ACM.png"
import cobra from "./Footer and Navbar/Cobra.png"

import "./footer.css";

function Footer() {
  return (
    <footer className="d-flex flex-column">
      <div class="upper-footer d-flex justify-content-around">
        <div class="footer-img-galaxy">
          <img src={galaxyimg} />
        </div>
        <div class="copyright-footer">
          <div className="pt-2">
            <ul className="d-flex justify-content-start">
              <li className="p-2">GALAXY WARS</li>
              <li className="p-2">ABOUT US</li>
              <li className="p-2">STORE</li>
              <li className="p-2">LOGIN</li>
            </ul>
          </div>
          <div>
            <ul className="d-flex justify-content-start pt-2">
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
            <ul className="d-flex justify-content-start pt-2">
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
          <div className="pt-2">
            <img src={copyright} />
          </div>
        </div>
        <div class="acm">
          <img src={acmimg} />
        </div>
      </div>
      <div class="lower-footer d-flex justify-content-start">
      <div class="footer-img-lower">
          <img src={acmcol} />
        </div>
        <div class="copyright-footer">
          <div className=" d-flex justify-content-start">
            <ul className="d-flex justify-content-start">
              <li className="p-2">ABOUT US</li>
              <li className="p-2">OUR GAMES</li>
              <li className="p-2">CAREERS</li>
              <li className="p-2">NEWS</li>
              <li className="p-2">INVESTORS</li>
              <li className="p-2">CONTACT</li>
            </ul>
            <img src={cobra} className="cobra-img"/>
          </div>
          <div>
            <ul className="d-flex justify-content-start">
              <li className="p-2">PRIVAY POLICY AND LEGAL</li>
              <li className="p-2">DONOT SELL MY PERSONAL INFORMATION</li>
              <li className="p-2">TERMS AND CONDITIONS</li>
              <li className="p-2">STORE</li>
              <li className="p-2">FORUMS</li>
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
            © 2022 PEC ACM CSS Student Chapter. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
