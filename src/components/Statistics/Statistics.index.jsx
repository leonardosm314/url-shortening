import img1 from "../../images/icon-brand-recognition.svg";
import img2 from "../../images/icon-detailed-records.svg";
import img3 from "../../images/icon-fully-customizable.svg";
export const Statistics = () => {
  return (
    <div className="statistics">
      <div className="statistics-header">
        <h2 className="header-title">Advanced Statistics</h2>
        <span className="header-mss">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </span>
      </div>
      <div className="statistics-list-articles">
        <div className="line-item" />
        <div className="item-article">
          <div className="img-back">
            <img src={img1} alt="gra-1" />
          </div>
          <h2>Brand Recognition</h2>
          <span>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </span>
        </div>
        <div className="item-article">
          <div className="img-back">
            <img src={img2} alt="gra-2" />
          </div>
          <h2>Detailed Records</h2>
          <span>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </span>
        </div>
        <div className="item-article">
          <div className="img-back">
            <img src={img3} alt="gra-3" />
          </div>
          <h2>Fully Customizable</h2>
          <span>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </span>
        </div>
      </div>
    </div>
  );
};
