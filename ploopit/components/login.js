import { GoogleLogin } from 'react-google-login';

const clientId = "GOOGLE_CLIENT_ID";

function Login() {

   const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user:", res.profileObj);
   }

   const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
   }

    return(
        <div id="singinButton">
             <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSingedIn={true}
            />
        </div>
    )
}

export default Login;