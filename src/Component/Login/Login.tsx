import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Styles from "./Login.module.css";
type Props = {
  setIsLogin: Function;
};

const Login = (props: Props) => {
  const { setIsLogin } = props;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleUserName = (e: any) => {
    setUserName(e.target.value);
  };
  const handleUserPassword = (e: any) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    if (userName === "aptech" && password === "aptech") {
      setIsLogin(true);
    } else {
      alert("Incorrect !! Try again...");
      setIsLogin(false);
    }
  };
  return (
    <div className={Styles.container}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className={Styles.card}>
          <div className={Styles.card__header}>
            <h3>Log In</h3>
            <div
              className={`d-flex justify-content-end ${Styles.social__icon}`}
            ></div>
          </div>
          <div className={Styles.card__body}>
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend"></div>
                <input
                  type="text"
                  className={`form-control ${Styles.form__control}`}
                  placeholder="username"
                  onChange={handleUserName}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend"></div>
                <input
                  type="password"
                  className={`form-control ${Styles.form__control}`}
                  placeholder="password"
                  onChange={handleUserPassword}
                />
              </div>
              <div className={`row align-items-center ${Styles.remember}`}>
                <input type="checkbox" />
                Remember Me
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Login"
                  className={`btn float-right ${Styles.Login__btn}`}
                  onClick={handleSubmit}
                />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className={`d-flex justify-content-center ${Styles.links}`}>
              Don't have an account?<a href="#">Sign Up</a>
            </div>
            <div className="d-flex justify-content-center">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
