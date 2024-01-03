import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Style.module.css";

export const Navbar = ({onLogout}) => {
  const navigate = useNavigate();
  const storedUsername = localStorage.getItem("name");
  const [username, setUsername] = useState(storedUsername || "");

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!window.localStorage.getItem("user"),
  );

  // const handleLogout = () => {
  //   window.localStorage.removeItem("user");
  //   window.localStorage.removeItem("name");
  //   window.localStorage.removeItem("token");
  //   setIsLoggedIn(!!window.localStorage.getItem("user"));
  // };

  const handleLogout = () => {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("token");
    setIsLoggedIn(false); // Update the login status
    if (onLogout) {
      onLogout(); // Trigger callback to handle logout in the parent component
    }
  };


  return (
    <div className={styles.container}>
      <div className={styles.job}> Jobfinder </div>
      <div>
        {isLoggedIn ? (
          <div className={styles.loggedin}>
            <button onClick={handleLogout}>Logout</button>
            <span>Hello! {username} </span>
          </div>
        ) : (
          <div className={styles.btnGroup}>
            <button
              onClick={() => navigate("/login")}
              className={`${styles.btn} ${styles.login}`}
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className={`${styles.btn} ${styles.register}`}
            >
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
