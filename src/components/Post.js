import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./Listpage.css"
import { MapContainer, Marker, TileLayer } from "react-leaflet";
// import pics from "./pics_xmasmarket";


const Post = ({ post }) => {
  /*  const dis = [post.bezirk];
  const districts = [...new Set(dis)];
  console.log(districts); */
  const display = post.lat.length ? (

    <div>
      <div id="map">
        <MapContainer
          center={
            post.lat.length
              ? [post.lat.replaceAll(",", "."), post.lng.replaceAll(",", ".")]
              : [52.5125277, 13.3871678]
          }
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={
              post.lat.length
                ? [post.lat.replaceAll(",", "."), post.lng.replaceAll(",", ".")]
                : [52.5125277, 13.3871678]
            }
          ></Marker>
        </MapContainer>
      </div>

      <div>
        <a
          id="maps-link"
          href={`https://www.google.com/maps/search/?api=1&query=${post.strasse}`}
          target="_blank"
          rel="noreferrer"
        >
          Show on the Map
        </a>
      </div>
    </div>

  ) : (

    <div>
      <a
        id="maps-link"
        href={`https://www.google.com/maps/search/?api=1&query=${post.strasse}`}
        target="_blank"
        rel="noreferrer"
      >
        Show on the Map
      </a>
    </div>
  );

  return (

    <article>
      <h3>{post.name}</h3>
      {post.oeffnungszeiten && <h4>Opening hours: {post.oeffnungszeiten.replace("Mo" ,"Mon").replace("täglich", "daily").replace("Di", "Tue")
      .replace("Sa", "Sat").replace("So", "Sun").replace("Do", "Thu").replace("Fr","Fri")}</h4>}
      {/* <h4 id="von-bis">
        From: {post.von} to {post.bis}
      </h4> */}
      {/* <p>District: {post.bezirk}</p> */}
      <Popup trigger={<button> More Information</button>} position="center">

        <div>
          <h3>{post.name}</h3>
          <div>
            Adress: {post.strasse} , {post.plz_ort} in {post.bezirk}
          </div>
          <div>{display}</div>
        </div>
      </Popup>
    </article>

  );
};
export default Post;
