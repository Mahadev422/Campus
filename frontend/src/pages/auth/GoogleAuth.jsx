import { GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { useLogin } from "../../store/useAuth";

const GoogleAuth = () => {

  const {handleGoogleLogin} = useLogin();

  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          handleGoogleLogin(credentialResponse.credential);
        }}
        onError={() => {
          toast.error('Login Failed')
        }}
      />
    </>
  );
};

export default GoogleAuth;
