import { useState } from "react";
import Signup from "../signup/SignupPage";
import Login from "../login/LoginPage";
import styles from "./Auth.module.css";
import authImage from "../../../assets/auth/auth-image.png";

// enum-like object
const AuthMode = Object.freeze({
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
});

export default function Auth() {
  const [mode, setMode] = useState(AuthMode.LOGIN);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
          <div>
            <h1 className={styles.header}>
              {mode === AuthMode.SIGNUP
                ? "Register With WorkoutBuddy"
                : "Login to WorkoutBuddy"}
            </h1>
            <p className={styles.text}>
              {mode === AuthMode.SIGNUP
                ? "Start your journey to a stronger, healthier you"
                : "Welcome back! Continue your fitness journey"}
            </p>
          </div>

          {mode === AuthMode.SIGNUP ? <Signup /> : <Login />}

          {/* Toggle link */}
          {/* Toggle link */}
          <div className={styles.switchText}>
            {mode === AuthMode.SIGNUP ? (
              <>
                <span>Already have an account? </span>
                <button
                  className={styles.switchBtn}
                  onClick={() => setMode(AuthMode.LOGIN)}
                >
                  Login
                </button>
              </>
            ) : (
              <>
                <span>Don’t have an account? </span>
                <button
                  className={styles.switchBtn}
                  onClick={() => setMode(AuthMode.SIGNUP)}
                >
                  Sign up
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img
            src={authImage}
            alt="Auth Illustration"
            loading="lazy"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
