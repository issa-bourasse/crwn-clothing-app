import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

//deferent methode to import logo by me Mr issa bourasse
// import { ReactComponent as CrwnLogo } from "../../assets/crwn.svg";

import Logo from "../../components/Logo/Logo";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {NavigationContainer,NavLink, NavLinks, LogoContainer } from "./navigation.style";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import {signOutUser} from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  const {isCartOpen} = useContext(CartContext);

  // const signOutHandler = async () =>{
  //   await signOutUser();
  //   setCurrentUser(null)
  // }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
          ) : (
            <NavLink to="/auth">
              Sign In
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
