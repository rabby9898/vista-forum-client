import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="card w-full md:w-[450px] lg:w-[600px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={user.photoURL} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Admin:{user?.displayName}</h2>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
