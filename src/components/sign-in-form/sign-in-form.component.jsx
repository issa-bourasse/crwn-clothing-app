import React from "react";
import { useState,useContext } from "react";
import "./sign-in-form.style.scss";

import { UserContext } from "../../context/user.context";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassowrd,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFromFields = {
  email: "",
  password: "",
};

const SignIN = () => {
  const [formFields, setFormFields] = useState(defaultFromFields);
  const { email, password } = formFields;

  const {setCurrentUser}= useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFromFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassowrd(
        email,
        password
      );
      setCurrentUser(user);
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("wrong password or email ho nows");
          break;
        case "auth/user-not-found":
          alert("no use found with this email");
          break;
        default:
          console.log(error);
      }

      // if (error.code === "auth/Wrong password") {
      //   alert("wrong email or password");
      // }
    }
  };
  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const SignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign In with your email and password</span>
      <form
        onSubmit={() => {
          handleSubmit();
        }}
        action=""
      >
        {/* <label>Email</label> */}
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        {/* <label>Password</label> */}
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign IN</Button>
          <Button type='button' buttonTyppe="google" onClick={SignInWithGoogle}>
            Google Sign IN
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignIN;
