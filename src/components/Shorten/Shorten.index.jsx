export const Shorten = () => {
  return (
    <div className="container-short">
      <div className="content-shorten-input">
        <input type="text" />
        <span className="mss-err-and-load"></span>
        <button>Shorten it!</button>
      </div>
      <div className="list-short-link">
        <div className="link-item">
          <span className="url-full"></span>
          <span className="url-short"></span>
          <button>Copied!</button>
        </div>
      </div>
    </div>
  );
};
