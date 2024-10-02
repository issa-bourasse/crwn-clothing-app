import React from "react";
import "./authentication.styles.scss";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sing-up-form.component";
import SignIN from "../../components/sign-in-form/sign-in-form.component";

function Authentication() {
  /* i use fetchRedirectResult beacuse the async
  function return error if i dont use it but the data dosen't
  show in the console and not getting restore in the firebase sow if
  you have time future me mark it in the list of bugs
  i don't care about and forget about it */
  //   useEffect(() => {
  //     const fetchRedirectResult = async () => {
  //       const response = await getRedirectResult(auth);
  //       if(response){
  //         const userDocRef =await createUserDocumentFromAuth(response.user)
  //       }
  //       console.log(response);
  //     };

  //     fetchRedirectResult();
  //   }, []);


  return (
    <div className="authentication-container">
      {/* <button onClick={logGoogleUser}>Sign In With Google Popup</button> */}
      <SignIN />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
