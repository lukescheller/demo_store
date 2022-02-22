import React, { useState, useEffect } from "react";
import styles from "./Credentials.module.css";
import signIn_Check from "../formCheck_Functions/signIn_Check";
import signUp_Check from "../formCheck_Functions/signUp_Check";
import { useSelector, useDispatch } from "react-redux";
import { selectCredentials } from "../store/signUpSlice";
import { axiosRegister, axiosSignIn } from "../store/signUpSlice";
import me from "../images/me2022.jpg";

const Credentials = () => {
  const { credentials } = useSelector(selectCredentials);
  const dispatch = useDispatch();
  // console.log(credentials);

  useEffect(() => {
    if (credentials.signUp_error) {
      setSignUpError(true);
    } else {
      setSignUpError(false);
    }
    if (credentials.signIn_error) {
      setSignInError(true);
    } else {
      setSignInError(false);
    }
  }, [credentials]);
  // [credentials is how you track when your redux state changes/updates....]

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

  //SignIn Handler
  const signIn_Handler = (event) => {
    event.preventDefault();
    // console.log(signIn_Check(signInEmail, signInPassword));
    // signIn_Check(signInEmail, signInPassword);
    if (signIn_Check(signInEmail, signInPassword)) {
      // true
      dispatch(
        axiosSignIn({
          email: signInEmail,
          password: signInPassword,
        })
      );
    } else {
      // false
      setSignInError(true);
      setTimeout(() => {
        setSignInError(false);
      }, 1000);
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
      //redux function
      // DON'T FORGET () when calling a function....
      dispatch(
        axiosRegister({
          username: signUpUsername,
          email: signUpEmail,
          password: signUpPassword,
        })
      );
    } else {
      // false
      setSignUpError(true);
      setTimeout(() => {
        setSignUpError(false);
      }, 1000);
    }
  };

  return (
    <div style={{}}>
      <div className={styles.outerWrapper}>
        <div className={styles.leftWrapper}>
          <div className={styles.leftImg}>
            <img alt="me" src={me} />
          </div>
          <div className={styles.leftIcons}>
            <img
              alt="windows"
              src="https://img.icons8.com/color/48/000000/windows-logo.png"
            />
            <img
              alt="visual studio code"
              src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
            />
            <img
              alt="html5"
              src="https://img.icons8.com/color/48/000000/html-5--v1.png"
            />
            <img
              alt="css"
              src="https://img.icons8.com/color/48/000000/css3.png"
            />
            <img
              alt="bootstrap"
              src="https://img.icons8.com/color/48/000000/bootstrap.png"
            />
            <img
              alt="javascript"
              src="https://img.icons8.com/color/48/000000/javascript--v1.png"
            />
            <img
              alt="react"
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
            />
            <img
              alt="redux"
              src="https://img.icons8.com/color/48/000000/redux.png"
            />
            <img
              alt="node"
              src="https://img.icons8.com/fluency/48/000000/node-js.png"
            />
            <img
              alt="photoshop"
              src="https://img.icons8.com/color/48/000000/adobe-photoshop--v1.png"
            />
            <img
              alt="illustrator"
              src="https://img.icons8.com/color/48/000000/adobe-illustrator--v1.png"
            />
            <img
              alt="indesign"
              src="https://img.icons8.com/color/48/000000/adobe-indesign--v1.png"
            />
          </div>
          <div className={styles.leftText}>
            My name is Luke. From a very early age, I knew that I wanted to join
            the creative industry. My journey as an artist began with figure
            drawing and pointillism. I love the technicalities and process of
            illustrating a scene out of my imagination or copying a still life.
            After moving back to Minnesota from Las Vegas I decided to learn
            more about Adobe applications such as Photoshop and Illustrator. My
            most recent graphic design project has been creating t-shirt designs
            and logos with my business partner. Together, we founded the label
            Ninety-One. During my time at Minneapolis Community and Technical
            College, I discovered my interest in web development. My code of
            choice for the past 2 years has been Javascript—specifically React
            JS. My work is, now, dedicated to web development. I love the
            challenge and process of writing and learning to write efficient
            code! My long term professional goal is to become a senior full
            stack web developer/software engineer at a skateboarding company
            such as Thrasher, Zumiez, or CCS! Thanks for taking the time to read
            my bio!
            <br />
            <br />
          </div>
          <div> lukescheller1991@outlook.com | 651-207-7638</div>
        </div>
        {!credentials.is_loggedIn && (
          <div className={styles.wrapper}>
            {/* Sign In */}
            <div
              class="p-3 bg-primary text-white"
              style={{
                margin: "5px",
                marginBottom: "-5px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h1>Sign In</h1>
              <div>
                <img
                  alt="key"
                  src="https://img.icons8.com/external-nawicon-outline-color-nawicon/48/000000/external-key-hotel-nawicon-outline-color-nawicon.png"
                />{" "}
              </div>
            </div>
            {signInError && (
              <div
                className="p-3 bg-danger text-white"
                style={{ margin: "5px", marginBottom: "-5px" }}
              >
                Invalid Credentials
              </div>
            )}
            <div className={styles.signUp}>
              <div className={styles.signUp_form}>
                <form onSubmit={signIn_Handler}>
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
                      onChange={signInEmailChangeHandler}
                      value={signInEmail}
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
                      name="confirm_password"
                      onChange={signInPasswordChangeHandler}
                      value={signInPassword}
                    />
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <button className="m-1 btn btn-success" type="submit">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Sign Up */}
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
                <img
                  alt="notepad"
                  src="https://img.icons8.com/fluency/48/000000/clipboard.png"
                />{" "}
              </div>
            </div>
            {signUpError && (
              <div
                className="p-3 bg-danger text-white"
                style={{ margin: "5px", marginBottom: "-5px" }}
              >
                {/* {credentials.signUp_error_message} */}
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
                  <div style={{ marginTop: "15px" }}>
                    {credentials.loading === "loading" ? (
                      <img
                        alt="spinner"
                        src="https://img.icons8.com/material-outlined/24/000000/spinner--v3.png"
                      />
                    ) : (
                      <button className="m-1 btn btn-success" type="submit">
                        Sign Up
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Credentials;
