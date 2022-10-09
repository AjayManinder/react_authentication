import React, { useState } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";
import { AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPools";
import { useNavigate, Link } from "react-router-dom";
import "./LogSing.css";
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    //
    if (!email.match(/.+@.+.com/)) {
      alert("Please add a valid email (Ex: abc@xyz.com )");
      return;
    }

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSucess:", data);
        // alert("Login successful");
        return navigate("/sample");
      },

      onFailure: (err) => {
        console.error("onFailure:", err);
        alert("Incorrect username or password");
        return;
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired:", data);
      },
    });
  };

  return (
    <div className="App_Main">
      <div>
      <div className="heading">LOGIN FORM</div>
      <form className="formlog" onSubmit={onSubmit}>
        <label className="Labels" htmlFor="email">
          Email
        </label>
        <input
        className="input_box"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="enter email"
          required
        ></input>
        <div className="gap"></div>
        <label className="Labels" htmlFor="password">
          Password
        </label>
        <input
        className="input_box"
          value={password}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="enter Password"
          required
        ></input>
        <div>
          <button className="btn" type="submit">
            Login
          </button>
        </div>
      </form>

      <div className="btm_txt">
        if not an user{" "}
        <Link to="/SignUp" className="btn_Link">
          Sign up
        </Link>{" "}
        here to login{" "}
      </div>
      </div>
    </div>
  );
};

export default Login;
