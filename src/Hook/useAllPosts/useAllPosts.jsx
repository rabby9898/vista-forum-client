import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const useAllPosts = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: allPost = [], refetch } = useQuery({
    queryKey: ["allPost", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allPosts?email=${user.email}`);
      return res.data;
    },
  });
  return [allPost, refetch];
};

export default useAllPosts;
