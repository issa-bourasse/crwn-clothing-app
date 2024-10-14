import React from "react";
import { useState } from "react";
import "./sign-up-form.style.scss";

import {
  createAuthUserWithEmailAndPassowrd,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFromFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFromFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFromFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password don't match");
      setFormFields.password = "";
      setFormFields.confirmPassword = "";
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassowrd(
        email,
        password
      ); 
      // console.log();
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if(error.code === 'auth/email-already-in-use'){
        alert('connat create user email already in use')
      }
      else{
        console.log("user creation encountred an error", error);
      }
      
    }
  };

  console.log(formFields);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
        <h2>Don't have an account</h2>
      <span>Sign Up with your email and password</span>
      <form
        onSubmit={() => {
          handleSubmit();
        }}
        action=""
      >
        {/* <label>Display Name</label> */}
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        {/* <label>Confirm Password</label> */}
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
