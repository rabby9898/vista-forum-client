import useAllPosts from "../../../Hook/useAllPosts/useAllPosts";

const MyPost = () => {
  const [allPost] = useAllPosts();
  return (
    <div>
      <h1>My Post({allPost.length})</h1>
    </div>
  );
};

export default MyPost;
