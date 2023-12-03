import { BiDownvote, BiUpvote } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const PostsPages = () => {
  const posts = useLoaderData();
  const { image, title, name, posted_time, desc, tag } = posts;
  return (
    <div className="pt-5 md:pt-20 lg:pt-40">
      <div>
        <div className="p-8 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="px-16 py-20 bg-white dark:bg-gray-800 shadow rounded-lg w-[full]">
            <div className="flex mb-4">
              <img className="w-12 h-12 rounded-full" src={image} />
              <div className="ml-2 mt-0.5">
                <span className="block font-medium text-base leading-snug text-black  dark:text-gray-100">
                  {name}
                </span>
                <span className="block text-sm my-2 text-gray-900 dark:text-gray-400 font-light leading-snug">
                  {posted_time}
                </span>
                <span className="block text-sm my-2 text-gray-500 dark:text-gray-400 font-light leading-snug">
                  {tag}
                </span>
              </div>
            </div>
            <h3 className="text-black text-xl my-5 font-semibold dark:text-gray-100 leading-snug md:leading-normal">
              {title}
            </h3>
            <p className="text-gray-800 dark:text-gray-100 mb-5 leading-snug md:leading-normal">
              {desc}
            </p>
            <div className="flex justify-between items-center mt-10">
              <div className="flex items-center gap-4">
                <div className="flex ">
                  <BiUpvote className="text-3xl"></BiUpvote>
                  <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">
                    0
                  </span>
                </div>
                <div className="flex ">
                  <BiDownvote className="text-3xl"></BiDownvote>
                  <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">
                    0
                  </span>
                </div>
              </div>
              <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">
                <button className="btn w-full px-16">0 Comments</button>
              </div>
              <div>
                <FaShareAlt className="text-2xl" />
              </div>
            </div>
            <div className="mt-12">
              <textarea
                placeholder="Your comment here"
                className="textarea textarea-bordered textarea-lg w-full max-w-xs"
              ></textarea>
            </div>
            <button className="btn px-10 bg-purple-600 text-white">
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsPages;
