import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext } from "react";

import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../Hook/useAxiosPublic/useAxiosPublic";

const Login = () => {
  const { loginUSer, googleSignIn } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log("state in the location login page", location.state);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUSer(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Successfully Logged in!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Successfully Logged in!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      });
    });
  };
  return (
    <div
      //   style={{
      //     backgroundImage: `url("${img1}")`,
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     backgroundRepeat: "no-repeat",
      //   }}
      className="h-max"
    >
      <Helmet>
        <title>Vista Forum | Login</title>
      </Helmet>

      <div className="pt-40">
        <h1 className="text-3xl text-center">Login Your Account</h1>
        <form onSubmit={handleLogin} className="w-[500px] mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            {/* TODO: apply disabled for re captcha */}
            <input
              className="btn btn-primary bg-purple-600 text-white"
              type="submit"
              value="Login"
            />
            <div>
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex justify-center items-center bg-transparent text-purple-600 gap-1 border border-purple-600 border-gray rounded-lg py-2 mt-10 mb-3 text-base"
              >
                <FcGoogle className="text-xl" /> Sign up With Google
              </button>
              <div>
                <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-purple-600 antialiased">
                  New user?{" "}
                  <Link className="font-bold text-purple-600" to="/signUp">
                    Create your account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
