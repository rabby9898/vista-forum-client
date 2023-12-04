import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure/useAxiosSecure";
import useAnnounce from "../../../Hook/useAnnounce/useAnnounce";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const AdminAnnounce = () => {
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useAnnounce();
  const { user } = useContext(AuthContext);
  const handleAnnounce = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const title = form.title.value;
    const description = form.description.value;
    const photo = form.photo.value;

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();
    const announcePostInfo = {
      name,
      title,
      description,
      email: user.email,
      photo,
      date: formattedDate,
    };
    axiosSecure.post("/makeAnnounce", announcePostInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        form.reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Announcement published",
          showConfirmButton: false,
          timer: 2000,
        });
        refetch();
      }
    });
  };
  return (
    <div className="px-36 py-20">
      <div className="text-center py-10 w-[700px] mx-auto">
        <h1 className="text-4xl text-black font-bold">Add A New Post</h1>
      </div>
      <form onSubmit={handleAnnounce} className="w-[600px] mx-auto">
        <div className="form-control w-full">
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
            <span className="label-text text-xl font-semibold">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full focus:border focus:border-red-950 focus:outline-none"
            name="name"
          />
        </div>

        <label className="label">
          <span className="label-text text-xl font-semibold">Title</span>
        </label>
        <input
          type="text"
          placeholder="title"
          className="input input-bordered w-full focus:border focus:border-red-950 focus:outline-none"
          name="title"
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
          value="Make Announcement"
          className=" w-full bg-purple-600 text-white uppercase rounded-xl py-3 my-5"
        />
      </form>
    </div>
  );
};

export default AdminAnnounce;
