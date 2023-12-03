import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const usePosts = () => {
  const axiosSecure = useAxiosSecure();
  const { data: post = [] } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const res = await axiosSecure.get("/posts");
      return res.data;
    },
  });
  return [post];
};

export default usePosts;
