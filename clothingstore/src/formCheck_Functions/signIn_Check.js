const signIn_Check = (email, password) => {
  //valid email
  let valid_SignIn = false;
  //email
  // - remove front & back whitespace - trim() doesn't work
  let email_remove_space = email.replace(/\s/g, "");
  let str = email_remove_space;
  //check for com
  // let com_check = str.substring(str.length - 4);
  let com_check = false;
  if (
    str.substring(str.length - 4) === ".com" ||
    str.substring(str.length - 4) === ".org" ||
    str.substring(str.length - 4) === ".net" ||
    str.substring(str.length - 4) === ".gov" ||
    str.substring(str.length - 3) === ".co" ||
    str.substring(str.length - 3) === ".io"
  ) {
    com_check = true;
  }
  // - remove front & back whitespace - trim() doesn't work
  let password_remove_space = password.replace(/\s/g, "");
  let pass_check = password_remove_space;
  // - check for valid email

  console.log(str, pass_check);
  let email_checked = str;
  let password_checked = pass_check;

  if (
    email_remove_space.includes("@") &&
    com_check &&
    str.length > 5 &&
    pass_check.length > 0
  ) {
    valid_SignIn = true;
    return [valid_SignIn, { email: email_checked, password: password_checked }];
  } else {
    return [valid_SignIn, false];
  }
};

export default signIn_Check;
