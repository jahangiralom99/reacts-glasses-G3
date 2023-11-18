import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {

    const {googleSingIn } = useContext(AuthContext);

    const handleGoogleSingIn = (google) => {
        google()
            .then(result => {
                const users = result.user;
                console.log(users);
            })
            .catch(err => {
                const errorMessage = err.message;
                console.log(errorMessage);
            })
    }

    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button
                    onClick={()=>handleGoogleSingIn(googleSingIn)}
                    className="btn btn-neutral btn-sm">Google</button>
            </div>
        </>
    );
};

export default SocialLogin;