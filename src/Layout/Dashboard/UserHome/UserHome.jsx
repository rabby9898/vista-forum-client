import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAllPosts from "../../../Hook/useAllPosts/useAllPosts";
import { Link } from "react-router-dom";
import { BiDownvote, BiUpvote } from "react-icons/bi";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  const [allPost] = useAllPosts();
  console.log(user);
  return (
    <div>
      <div className="card w-full md:w-[450px] lg:w-[600px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={user.photoURL} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user.displayName}</h2>
          <p>Email: {user.email}</p>
          <div>
            {allPost.map((post) => (
              <div key={post._id}>
                <Link to={`/posts/${post._id}`}>
                  <div className="p-8 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                    <div className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg max-w-lg">
                      <div className="flex mb-4">
                        {/* <img
                          className="w-12 h-12 rounded-full"
                          src={post.photo}
                        /> */}
                        <div className="ml-2 mt-0.5">
                          <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
                            {post.name}
                          </span>
                          <span className="block text-sm text-gray-900 dark:text-gray-400 font-light leading-snug">
                            {post.date}
                          </span>
                          <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
                            {post.tag}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-black text-xl font-semibold dark:text-gray-100 leading-snug md:leading-normal">
                        {post.title}
                      </h3>
                      <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">
                        {post.description}
                      </p>
                      <div className="flex justify-between items-center mt-5">
                        <div className="flex items-center gap-4">
                          <div className="flex ">
                            <BiUpvote className="text-xl"></BiUpvote>
                            <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">
                              {post.upVote}
                            </span>
                          </div>
                          <div className="flex ">
                            <BiDownvote className="text-xl"></BiDownvote>
                            <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">
                              {post.downVote}
                            </span>
                          </div>
                        </div>
                        <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">
                          0 comments
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
