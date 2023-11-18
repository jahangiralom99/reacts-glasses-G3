import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
      const password = e.target.password.value;
      

      
    // validate password
    if (password.length < 6) {
        return alert('Password should be at least 6 characters')
      }
  

      // log in users 
      
    logIn(email, password)
      .then((result) => {
        const users = result.user;
        console.log(users);
      })
      .catch((err) => {
        const errorMessage = err.message;
        console.log(errorMessage);
      });
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 p-0">
                <button type="submit" className="btn btn-neutral">
                  Login
                </button>
              </div>
              <label className="label">
                New here?{" "}
                <Link to="/register" className="label-text-alt link link-hover">
                  Create an account
                </Link>
              </label>
              <SocialLogin />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
