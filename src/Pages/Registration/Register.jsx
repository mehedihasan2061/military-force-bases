import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";



const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("")
  // const [success, setSuccess] = useState("")
  const [showPassword,setShowPassword]=useState(false)
  const [confirmShowPassword,setConfirmShowPassword]=useState(false)
    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirm.value;
      console.log(name, photoUrl, email, password, confirmPassword);
      setRegisterError("")
      if (password.length < 6) {
        setRegisterError("Please Provide Must Be 6 Character")
        return
      }
      if (!/[a-z]/.test(password)) {
        setRegisterError("Please provide at least one lowercase")
        return
      }
      if (!/[A-Z]/.test(password)) {
        setRegisterError("Please provide at least one Uppercase")
        return
      }
      if (password != confirmPassword) {
        setRegisterError("Password did not match")
        return
      }
        
        createUser(email, password)
            .then(() => {
              updateUserProfile(name, photoUrl)
               .then(() => {
          // Profile updated!
          // ...
               })
              // setSuccess (toast("Wow so easy!"));
              e.target.reset("")
            })
            .catch(error => {
              console.log(error);
              setRegisterError(error.message)
            })
      
        // .then(() => {
        //   // Profile updated!
        //   // ...
        // })
        
  }
  // console.log(success);
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold">Register Now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    placeholder="photo url"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type={confirmShowPassword ? "text" : "password"}
                    name="confirm"
                    placeholder="confirm password"
                    className="input input-bordered"
                    required
                  />
                  <div className="absolute right-3 top-12 text-xl">
                    {confirmShowPassword ? (
                      <FaEyeSlash
                        onClick={() =>
                          setConfirmShowPassword(!confirmShowPassword)
                        }
                      ></FaEyeSlash>
                    ) : (
                      <FaEye
                        onClick={() =>
                          setConfirmShowPassword(!confirmShowPassword)
                        }
                      ></FaEye>
                    )}
                  </div>
                </div>
                <p>
                  Already have an account ?{" "}
                  <Link className="text-blue-600 font-bold" to="/login">
                    Login
                  </Link>
                </p>
                <div className="form-control mt-6">
                  <button  className="btn btn-primary">
                    Register
                  </button>
                  {/* <ToastContainer /> */}
                </div>
                {registerError && <p>{registerError}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;