import axios from "axios";
export const axiosSecure = axios.create({
  baseURL: "https://vista-forum-server.vercel.app",
});
const useAxiosSecure = () => {
  // const { logOut } = useContext(AuthContext);
  // const navigate = useNavigate();
  // axiosSecure.interceptors.request.use(
  //   function (config) {
  //     const token = localStorage.getItem("token");
  //     console.log("client interceptors", token);
  //     config.headers.authorization = `Bearer ${token}`;
  //     return config;
  //   },
  //   function (error) {
  //     // Do something with request error
  //     return Promise.reject(error);
  //   }
  // );

  // response interceptors
  // axiosSecure.interceptors.response.use(
  //   function (response) {
  //     return response;
  //   },
  //   async (error) => {
  //     const status = error.response.status;
  //     console.log("Response interceptors error:", status);
  //     if (status === 401 || status === 403) {
  //       await logOut();
  //       navigate("/login");
  //     }
  //     return Promise.reject(error);
  //   }
  // );
  return axiosSecure;
};

export default useAxiosSecure;
