import { Dispatch, SetStateAction } from "react";

interface loginProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

/**
 * This function checks for login authentication
 * @param props - loginProps that encompasses a boolean of whether user is logged in, and a Dispatch that changes the booleans state
 * @returns a button component for user to switch between logged in and logged out
 */
export function LoginButton(props: loginProps) {

  //actual logic for authenticating login
  const authenticate = () => {
    const newValue = !props.isLoggedIn;
    props.setIsLoggedIn(newValue);
    return newValue;
  };

  if (props.isLoggedIn) {
    return (
      <button className="login" aria-label="Sign Out" onClick={authenticate}>
        Sign out
      </button>
    );
  } else {
    return (
      <button className="login" aria-label="Login" onClick={authenticate}>
        Login
      </button>
    );
  }
}
