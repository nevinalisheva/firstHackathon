import { useState } from "react";

const Post = ({ post }) => {
  // const [show, setShow] = useState(false);
  return (
    <article>
      <h3 id="von-bis">
        From: {post.von} to {post.bis}
      </h3>
      <br />
      <p>{post.name}</p>
    </article>
  );
};
export default Post;
