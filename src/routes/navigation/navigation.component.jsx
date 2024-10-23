import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import { UserContext } from "../../context/user.context";

//deferent methode to import logo by me Mr issa bourasse
// import { ReactComponent as CrwnLogo } from "../../assets/crwn.svg";

import Logo from "../../components/Logo/Logo";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import "./navigation.style.scss";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import {signOutUser} from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  // const signOutHandler = async () =>{
  //   await signOutUser();
  //   setCurrentUser(null)
  // }

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>Sign Out</span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
