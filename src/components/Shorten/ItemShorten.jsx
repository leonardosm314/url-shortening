import { useRef } from "react";

export const ItemShorten = ({ value }) => {
  // code: rest.code,
  // original_link: rest.original_link,
  // short_link: rest.full_short_link2,
  const { original_link, short_link } = value;
  const shortUrl = useRef();
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl.current.innerHTML);
      alert("copied!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="link-item">
      <span className="url-full">{original_link}</span>
      <span className="url-short" ref={shortUrl}>
        {short_link}
      </span>
      <button onClick={handleClick}>Copied!</button>
    </div>
  );
};
