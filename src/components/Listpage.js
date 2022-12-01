import Post from "./Post";
const ListPage = ({ posts }) => {
  const results = posts.map((post, i) => <Post key={i} post={post} />);
  return <main>{results}</main>;
};

export default ListPage;
