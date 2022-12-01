import { AuthContext } from "../Context/AuthContextProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function Login() {
  const { isAuth, login } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <h1>Login</h1>
      {/* <h1>{isAuth ? 'true':'false'}</h1> */}
      <button onClick={() => login()}>login</button>
    </div>
  );
}

export default Login;
