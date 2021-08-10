import im1 from "../../images/icon-facebook.svg";
import im2 from "../../images/icon-twitter.svg";
import im3 from "../../images/icon-pinterest.svg";
import im4 from "../../images/icon-instagram.svg";
export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <span className="logo-footer"> Shorttly</span>
        <div className="list-footer">
          <span className="list-header-footer">Features</span>
          <span>Link Shortening</span>
          <span>Branded Links</span>
          <span>Analytics</span>
        </div>
        <div className="list-footer">
          <span className="list-header-footer">Resources</span>
          <span>Blog</span>
          <span>Developers</span>
          <span>Support</span>
        </div>
        <div className="list-footer">
          <span className="list-header-footer">Company</span>
          <span>About</span>
          <span>Our Team</span>
          <span>Careers</span>
          <span>Contact</span>
        </div>
        <div className="list-icon-footer">
          <span>
            <img src={im1} alt="im1" />
          </span>
          <span>
            <img src={im2} alt="im2" />
          </span>
          <span>
            <img src={im3} alt="im3" />
          </span>
          <span>
            <img src={im4} alt="im4" />
          </span>
      
        </div>
      </div>
    </footer>
  );
};
