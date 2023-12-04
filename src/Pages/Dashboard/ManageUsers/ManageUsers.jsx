import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure/useAxiosSecure";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return (
    <div className="px-40 w-full py-10">
      <div className="flex justify-center gap-20 ">
        <div>
          <h1 className="text-3xl">All Users</h1>
        </div>
      </div>
      <div className="overflow-x-auto py-10">
        <div>
          <h1 className="text-xl font-semibold mb-4">
            Total Users: {users.length}
          </h1>
        </div>
        <table className="table w-[800px]">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {/* <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <>
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-ghost btn-base"
                      >
                        <FaUsers className="text-lg"></FaUsers>
                      </button>
                    </>
                  )}
                </td> */}
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
