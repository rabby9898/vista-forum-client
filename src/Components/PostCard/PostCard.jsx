import { BiUpvote } from "react-icons/bi";
const PostCard = ({ post }) => {
  const { image, name, title, desc, tag, posted_time } = post;
  return (
    <div>
      <div className="p-8 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg max-w-lg">
          <div className="flex mb-4">
            <img className="w-12 h-12 rounded-full" src={image} />
            <div className="ml-2 mt-0.5">
              <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
                {name}
              </span>
              <span className="block text-sm text-gray-900 dark:text-gray-400 font-light leading-snug">
                {posted_time}
              </span>
              <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
                {tag}
              </span>
            </div>
          </div>
          <h3 className="text-black text-xl font-semibold dark:text-gray-100 leading-snug md:leading-normal">
            {title}
          </h3>
          <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">
            {desc}
          </p>
          <div className="flex justify-between items-center mt-5">
            <div className="flex ">
              <BiUpvote className="text-xl"></BiUpvote>
              <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">
                8
              </span>
            </div>
            <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">
              33 comments
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
