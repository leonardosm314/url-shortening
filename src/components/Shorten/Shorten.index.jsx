import { useState } from "react";
import { ItemShorten } from "./ItemShorten";
export const Shorten = () => {
  const baseUrl = "https://api.shrtco.de/v2/";

  const [list, setList] = useState([]);
  const [load, setLoad] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const dt = Object.fromEntries(new FormData(e.target));
      if (!dt.url || dt.url === "") {
        alert("llene el formulario");
        return;
      }
      if (!new RegExp("https://*").test(dt.url)) {
        alert("url invalida");
        return;
      }
      setLoad(true);
      const rest = (
        await (
          await fetch(baseUrl + "shorten?url=" + dt.url, {
            method: "post",
          })
        ).json()
      ).result;

      const newItem = {
        code: rest.code,
        original_link: rest.original_link,
        short_link: rest.full_short_link2,
      };

      setList([...list, newItem]);
    } catch (error) {
      alert(JSON.stringify(error));
    }
    setLoad(false);
  };

  return (
    <div className="container-short">
      <form className="content-shorten-input" onSubmit={handleSubmit}>
        <input type="text" name="url" placeholder="Shorten a link here..." />
        <span className="mss-err-and-load"></span>
        <button>Shorten it!</button>
      </form>
      <div className="list-short-link">
        {list.map((value, index) => {
          return <ItemShorten value={value} key={index} />;
        })}
        {load && "...loading"}
      </div>
    </div>
  );
};
