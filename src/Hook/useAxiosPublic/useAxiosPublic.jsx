import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://vista-forum-server.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
