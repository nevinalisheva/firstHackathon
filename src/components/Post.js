import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const Post = ({ post }) => {
  // const [show, setShow] = useState(false);
  return (
    <article>
      <h2>{post.name}</h2>
      <h3>Opening times: {post.oeffnungszeiten}</h3>
      <h4 id="von-bis">
        From: {post.von} to {post.bis}
      </h4>
      <p>District: {post.bezirk}</p>
      <Popup
        trigger={<button> More Information</button>}
        position="right center"
      >
        <div>
          <h3>{post.name}</h3>
          <div>
            Adress: {post.strasse} , {post.plz_ort}
          </div>
        </div>
      </Popup>
    </article>
  );
};
export default Post;
