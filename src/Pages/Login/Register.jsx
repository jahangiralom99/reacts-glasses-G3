import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

  const { createUser, updateProfileName } = useContext(AuthContext);
  
  const handleSubmit = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const img = e.target.img.value;
      const password = e.target.password.value;

    // console.log(name, email, password, img);

    // validate password
    if (password.length < 6) {
      return alert('Password should be at least 6 characters')
    }


    
    // create user 
    createUser(email, password)
      .then(result => {
        updateProfileName(name, img)
          .then()
          .catch(err => console.log(err))
          const users = result.user;
        console.log(users);
      })
      .catch(err => {
        const errorMessage = err.message;
        console.log(errorMessage);
      })
    
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
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
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                                  placeholder="Full name"
                                  name="name"
                  className="input input-bordered"
                />
              </div>
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
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                                  placeholder="image url"
                                  name="img"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                                  placeholder="password"
                                  name="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6 p-0">
                <button className="btn btn-neutral" type="submit">Register</button>
              </div>
              <label className="label">
                Have an account?{" "}
                <Link to="/login" className="label-text-alt link link-hover">
                  Please Login
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

export default Register;
