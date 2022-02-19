import React, { useState } from "react";
import styles from "./Credentials.module.css";
import signIn_Check from "../formCheck_Functions/signIn_Check";
import signUp_Check from "../formCheck_Functions/signUp_Check";

const Credentials = () => {
  //Sign-In state
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  //Sign-Up state
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");

  //Error state
  const [signInError, setSignInError] = useState(false);
  const [signUpError, setSignUpError] = useState(false);

  //Handlers

  //Sign In - Email
  const signInEmailChangeHandler = (event) => {
    setSignInEmail(event.target.value);
  };
  //Sign In - Password
  const signInPasswordChangeHandler = (event) => {
    setSignInPassword(event.target.value);
  };

  //Sign Up - Username
  const signUpUsernameChangeHandler = (event) => {
    setSignUpUsername(event.target.value);
  };
  //Sign Up - Email
  const signUpEmailChangeHandler = (event) => {
    setSignUpEmail(event.target.value);
  };
  //Sign Up - Password
  const signUpPasswordChangeHandler = (event) => {
    setSignUpPassword(event.target.value);
  };
  //Sign Up - Confirm Password
  const signUpConfirmPasswordChangeHandler = (event) => {
    setSignUpConfirmPassword(event.target.value);
  };

  //Submit Handlers

  //SignIp Handler
  const signIn_Handler = (event) => {
    event.preventDefault();
    console.log(signIn_Check(signInEmail, signInPassword));
    // signIn_Check(signInEmail, signInPassword);
    if (signIn_Check(signInEmail, signInPassword)) {
      // true
    } else {
      // false
      setSignInError(true);
      setTimeout(() => {
        setSignInError(false);
      }, 3000);
    }
  };

  //SignUp Handler
  const signUp_Handler = (event) => {
    event.preventDefault();
    // console.log(
    //   signUp_Check(
    //     signUpUsername,
    //     signUpEmail,
    //     signUpPassword,
    //     signUpConfirmPassword
    //   )
    // );
    if (
      signUp_Check(
        signUpUsername,
        signUpEmail,
        signUpPassword,
        signUpConfirmPassword
      )
    ) {
      //true
    } else {
      // false
      setSignUpError(true);
      setTimeout(() => {
        setSignUpError(false);
      }, 3000);
    }
  };

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.wrapper}>
        <div
          className="p-3 bg-primary text-white"
          style={{
            margin: "5px",
            marginBottom: "-5px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1>Sign In</h1>
          <div>
            <img src="https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-key-hotel-nawicon-outline-color-nawicon.png" />
          </div>
        </div>
        {signInError && (
          <div className="p-3 bg-danger text-white" style={{ margin: "10px" }}>
            Invalid Credentials
          </div>
        )}
        <div className={styles.signIn}>
          <form onSubmit={signIn_Handler}>
            <label className={styles.signIn_label}>Email:</label>
            <input
              type="text"
              name="signIn_email"
              onChange={signInEmailChangeHandler}
              value={signInEmail}
            />
            <label className={styles.signIn_label}>Password:</label>
            <input
              type="text"
              name="signIn_password"
              onChange={signInPasswordChangeHandler}
              value={signInPassword}
            />
            <button className="m-1 btn btn-success" type="submit">
              Sign In
            </button>
          </form>
        </div>
        <div
          class="p-3 bg-primary text-white"
          style={{
            margin: "5px",
            marginBottom: "-5px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1>Sign Up</h1>
          <div>
            <img src="https://img.icons8.com/fluency/48/000000/clipboard.png" />{" "}
          </div>
        </div>
        {signUpError && (
          <div className="p-3 bg-danger text-white" style={{ margin: "10px" }}>
            Invalid Credentials
          </div>
        )}
        <div className={styles.signUp}>
          <div className={styles.signUp_form}>
            <form onSubmit={signUp_Handler}>
              <div
                style={{
                  border: "1px solid transparent",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <label className={styles.margin}>Username:</label>
                <input
                  className={styles.margin}
                  type="text"
                  name="signUp_name"
                  onChange={signUpUsernameChangeHandler}
                  value={signUpUsername}
                />
              </div>
              <div
                style={{
                  border: "1px solid transparent",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <label className={styles.margin}>Email:</label>
                <input
                  className={styles.margin}
                  type="text"
                  name="signUp_email"
                  onChange={signUpEmailChangeHandler}
                  value={signUpEmail}
                />
              </div>
              <div
                style={{
                  border: "1px solid transparent",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <label className={styles.margin}>Password:</label>
                <input
                  className={styles.margin}
                  type="text"
                  name="signUp_password"
                  onChange={signUpPasswordChangeHandler}
                  value={signUpPassword}
                />
              </div>
              <div
                style={{
                  border: "1px solid transparent",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <label className={styles.margin}>Confirm Password:</label>
                <input
                  className={styles.margin}
                  type="text"
                  name="confirm_password"
                  onChange={signUpConfirmPasswordChangeHandler}
                  value={signUpConfirmPassword}
                />
              </div>
              <div>
                <button className="m-1 btn btn-success" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
