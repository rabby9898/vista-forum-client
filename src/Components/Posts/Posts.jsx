import usePosts from "../../Hook/usePosts/usePosts";
import PostCard from "../PostCard/PostCard";

const Posts = () => {
  const [post] = usePosts();
  return (
    <div className="px-5 md:px-8 lg:px-32 py-5 md:py-10">
      {post.map((post) => (
        <PostCard key={post._id} post={post}></PostCard>
      ))}
    </div>
  );
};

export default Posts;
