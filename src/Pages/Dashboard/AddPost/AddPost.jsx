import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hook/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const AddPost = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const title = form.title.value;
    const description = form.description.value;
    const upVote = form.upVote.value;
    const tag = form.tag.value;
    const downVote = form.downVote.value;
    const photo = form.photo.value;
    if (user && user.email) {
      const addPostInfo = {
        name,
        title,
        description,
        upVote,
        downVote,
        email: user.email,
        tag,
        photo,
      };
      axiosSecure.post("/posts", addPostInfo).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your post is published",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
    }
  };

  return (
    <div className="px-36 py-20">
      <div className="text-center py-10 w-[700px] mx-auto">
        <h1 className="text-4xl text-black font-bold">Add A New Post</h1>
      </div>
      <form onSubmit={handleSubmit} className="w-[600px] mx-auto">
        <div className="flex justify-center gap-8">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl font-semibold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs focus:border focus:border-red-950 focus:outline-none"
              name="name"
            />
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Post Title
              </span>
            </label>
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full max-w-xs focus:border focus:border-red-950 focus:outline-none"
              name="title"
            />

            <label className="label">
              <span className="label-text text-xl font-semibold">Up Vote</span>
            </label>
            <input
              type="text"
              placeholder="Up Vote"
              className="input input-bordered w-full max-w-xs focus:border focus:border-red-950 focus:outline-none"
              defaultValue={"0"}
              name="upVote"
            />
          </div>
          {/* -- -------------------------------*/}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl font-semibold">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs focus:border focus:border-red-950 focus:outline-none"
              name="email"
            />
            <label className="label">
              <span className="label-text text-xl font-semibold">Tag</span>
            </label>
            <input
              type="text"
              placeholder="Tag"
              className="input input-bordered w-full max-w-xs focus:border focus:border-red-950 focus:outline-none"
              name="tag"
            />
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Down Vote
              </span>
            </label>
            <input
              type="text"
              placeholder="Down Vote"
              className="input input-bordered w-full max-w-xs focus:border focus:border-red-950 focus:outline-none"
              name="downVote"
              defaultValue={"0"}
            />
          </div>
        </div>
        <label className="label">
          <span className="label-text text-xl font-semibold">Photo</span>
        </label>
        <input
          type="text"
          placeholder="Photo URL"
          className="input input-bordered w-full focus:border focus:border-red-950 focus:outline-none"
          name="photo"
        />
        <label className="label">
          <span className="label-text text-xl font-semibold">Description</span>
        </label>
        <textarea
          placeholder="Post Description"
          className="textarea textarea-bordered textarea-md w-full"
          name="description"
        ></textarea>
        <input
          type="submit"
          value="Add Post"
          className=" w-full bg-purple-600 text-white uppercase rounded-xl py-3 my-5"
        />
      </form>
    </div>
  );
};

export default AddPost;
