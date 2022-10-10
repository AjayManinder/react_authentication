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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>

        <div className="heading">LOGIN FORM</div>
        <form className="formlog" onSubmit={onSubmit}>
          <label className="Labels" htmlFor="email">
            Email
          </label>

          <div className="keyset">
            <i class="fa fa-user icon"></i>

            <input
              class="input-field"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter Email"
              required
            ></input>
          </div>

          <div className="gap"></div>
          <label className="Labels" htmlFor="password">
            Password
          </label>
          <div className="keyset">
            <i class="fa fa-key icon"></i>
            <input
              class="input-field"
              value={password}
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter Password"
              required
            ></input>
          </div>

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
