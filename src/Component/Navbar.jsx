import { NavLink } from "react-router-dom";
import {AuthContext} from '../Context/AuthContextProvider';
import {useContext} from 'react';


const detials = [
  {
    to: "/",
    title: "Home"
  },
  {
    to: "/login",
    title: "Login"
  },
  {
    to: "/dashboard",
    title: "Dashboard"
  },
  {
    to: "/dashboard/settings",
    title: "Settings"
  }
];

function Navbar() {
  const {isAuth,logout} = useContext(AuthContext);

  const active = {
    color: "green",
    textDecoration: "none"
  };

  const normal = {
    color: "black",
    textDecoration: "none"
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      {detials.map((elem) => {
        return (
          <NavLink
            key={elem.to}
            to={elem.to}
            style={({ isActive }) => (isActive ? active : normal)}
            end
          >
            {elem.title}
          </NavLink>
        );
      })}
      {isAuth ? <button onClick={()=>logout()}>Logout</button>:null}
    </div>
  );
}

export default Navbar;
