import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa6";
import Swal from "sweetalert2";


const Login = () => {

    const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError,setLoginError]=useState("")
  const location = useLocation()
  // console.log(location.state);
  const navigate=useNavigate()
  console.log(location);
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then(result => {
              console.log(result.user)
              Swal.fire({
                title: "User Login Successfully",
                text: "You clicked the button!",
                icon: "success",
              });
              navigate(location?.state ? location.state:"/")
            })
            .catch(error => {
              console.log(error);
              setLoginError(error.message)
        })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
              console.log(result.user);
               Swal.fire({
                 title: "User Login Successfully",
                 text: "You clicked the button!",
                 icon: "success",
               });
              navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
            console.log(error);
        })
    }
    const handleGithubLogin = () => {
        githubLogin()
          .then((result) => {
             Swal.fire({
               title: "User Login Successfully",
               text: "You clicked the button!",
               icon: "success",
             });
            console.log(result.user);
            navigate(location?.state ? location.state : "/");
          })
          .catch((error) => {
            console.log(error);
          });
    }
    return (
      <div>
        <div className="hero min-h-screen my-16">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold">Login Now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <div className="absolute right-3 top-12 text-xl">
                    {showPassword ? (
                      <FaEyeSlash
                        onClick={() => setShowPassword(!showPassword)}
                      ></FaEyeSlash>
                    ) : (
                      <FaEye
                        onClick={() => setShowPassword(!showPassword)}
                      ></FaEye>
                    )}
                  </div>
                  <div>
                    {
                      loginError && <p className="text-red-600 font-bold">{loginError}</p>
                    }
                  </div>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <p>
                  Register Now ?{" "}
                  <Link className="text-blue-600 font-bold" to="/register">
                    Register
                  </Link>
                </p>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <p className="text-center font-bold">OR</p>
                <div className="flex justify-around gap-4">
                  <p
                    onClick={handleGoogleLogin}
                    className="flex cursor-pointer items-center gap-2 font-bold  border-2 p-2 rounded-xl hover:bg-gray-100"
                  >
                    <FaGoogle></FaGoogle>
                    <span>Google</span>
                  </p>
                  <p
                    onClick={handleGithubLogin}
                    className="flex cursor-pointer items-center gap-2 font-bold border-2 p-2 rounded-xl hover:bg-gray-100"
                  >
                    <FaGithub></FaGithub>
                    <span>Github</span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;