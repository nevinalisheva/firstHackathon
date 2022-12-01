import { useState } from "react";
import Post from "./Post";
const districts = [
  "Mitte",
  "Lichtenberg",
  "Friedrichshain-Kreuzberg",
  "Spandau",
  "Charlottenburg-Wilmersdorf",
  "Steglitz-Zehlendorf",
  "Reinickendorf",
  "Tempelhof-Schöneberg",
  "Marzahn-Hellersdorf",
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
    <main>
      <div>
        {districts.map((e) => {
          return (
            <button value={e} onClick={(e) => setDistrict(e.target.value)}>
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
