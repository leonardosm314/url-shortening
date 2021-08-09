import imgWork from "../../images/illustration-working.svg";
export const Main = () => {
  return (
    <main>
      <div className="cont-main">
        <div className="detail">
          <h2>More than just shorter links</h2>
          <span>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </span>
          <button>Get Started</button>
        </div>
        <img src={imgWork} alt="" />
      </div>
    </main>
  );
};
