const signUp_Check = (username, email, password, confirmPassword) => {
  let valid_signUp = false;

  //username - check
  let user_check = false;
  let userNameRemoveSpace = username.replace(/\s/g, "");
  let userName_checked = userNameRemoveSpace;
  if (userName_checked.length > 0) {
    user_check = true;
  }

  //email - check
  let com_check = false;
  let email_remove_space = email.replace(/\s/g, "");
  let email_checked = email_remove_space;

  if (
    email_checked.substring(email_checked.length - 4) === ".com" ||
    email_checked.substring(email_checked.length - 4) === ".org" ||
    email_checked.substring(email_checked.length - 4) === ".net" ||
    email_checked.substring(email_checked.length - 4) === ".gov" ||
    email_checked.substring(email_checked.length - 3) === ".co" ||
    email_checked.substring(email_checked.length - 3) === ".io"
  ) {
    com_check = true;
  }

  //password - check
  let pass_check = false;
  let password_remove_space = password.replace(/\s/g, "");
  let password_checked = password_remove_space;

  let confirm_password_remove_space = confirmPassword.replace(/\s/g, "");
  let confirm_password_checked = confirm_password_remove_space;

  //compare password & confirm password
  if (password_checked === confirm_password_checked) {
    pass_check = true;
  }

  if (
    user_check &&
    email_checked.includes("@") &&
    com_check &&
    email_checked.length > 5 &&
    password_checked.length > 0 &&
    confirm_password_checked.length > 0 &&
    pass_check
  ) {
    valid_signUp = true;
    console.log(
      userName_checked,
      email_checked,
      password_checked,
      confirm_password_checked
    );
    return valid_signUp;
  } else {
    console.log(
      userName_checked,
      email_checked,
      password_checked,
      confirm_password_checked
    );
    return valid_signUp;
  }
};

export default signUp_Check;
