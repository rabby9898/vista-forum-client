import { Link } from "react-router-dom";
import useAllPosts from "../../../Hook/useAllPosts/useAllPosts";
import { FaComment, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure/useAxiosSecure";

const MyPost = () => {
  const [allPost, refetch] = useAllPosts();
  const axiosSecure = useAxiosSecure();
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/allPosts/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div className="w-[800px] pl-20">
      <div>
        <div>
          <h1 className="text-3xl font-semibold text-center">My Posts</h1>
        </div>
        <div>
          <div className="overflow-x-auto py-10">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Title</th>
                  <th>Up Votes</th>
                  <th>Down Votes</th>
                  <th>Comments</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {allPost.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td className="text-right">{item.upVote}</td>
                    <td className="text-right">{item.upVote}</td>
                    <td>
                      <Link to={`/comments:${item._id}`}>
                        <button className="btn btn-ghost bg-purple-500">
                          <FaComment
                            className="text-white 
                                      "
                          ></FaComment>
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteItem(item)}
                        className="btn btn-ghost btn-lg"
                      >
                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
