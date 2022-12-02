import { useState } from "react";
import Post from "./Post";
import "./Listpage.css"

const districts = [
  "Mitte",
  "Lichtenberg",
  "Friedrichshain-Kreuzberg",
  "Spandau",
  "Charlottenburg-Wilmersdorf",
  "Steglitz-Zehlendorf",
  "Reinickendorf",
  "Tempelhof-Schöneberg",
  "Treptow-Köpenick",
  "Neukölln",
  "Pankow",
];
const ListPage = ({ posts }) => {
  const [district, setDistrict] = useState("");
  const results = posts
    .filter((post) => post.bezirk.includes(district))
    .map((post, i) => <Post key={i} post={post} />);
  return (

    <main id="list">
    <div className="districts">
        <button className="filter-district" value="" onClick={(e) => setDistrict(e.target.value)}>
          {" "}
          Show all
        </button>
        {districts.map((e, i) => {
          return (
            <button className="filter-district"
              key={i}
              value={e}
              onClick={(e) => setDistrict(e.target.value)}
            >
              {e}
            </button>
          );
        })}
      </div>
      {results}
    </main>
  );
};

export default ListPage;
