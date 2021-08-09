export const ItemShorten = ({ value }) => {
  // code: rest.code,
  // original_link: rest.original_link,
  // short_link: rest.full_short_link2,
  const { code, original_link, short_link } = value;
  return (
    <div className="link-item">
      <span className="url-full">{original_link}</span>
      <span className="url-short">{short_link}</span>
      <button>Copied!</button>
    </div>
  );
};
