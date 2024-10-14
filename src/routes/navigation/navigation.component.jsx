import { Outlet, Link ,} from "react-router-dom";
import { Fragment ,useContext} from "react";

import { UserContext } from "../../context/user.context";

// import { ReactComponent as CrwnLogo } from "../../assets/crwn.svg";
//deferent methode to import logo by me Mr issa bourasse 
import Logo from "../../components/Logo/Logo";

import "./navigation.style.scss";
const Navigation = () => {
  const {currentUser} = useContext(UserContext)
  console.log(currentUser)
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>  <Link className="nav-link" to="/auth">
            Sing In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
