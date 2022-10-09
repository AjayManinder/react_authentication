import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserPool from "../UserPools";
import "./LogSing.css";


const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    if (!email.match(/.+@.+.com/)) {
      alert("Please add a valid email (Ex: abc@xyz.com )");
      return;
    }

    if (
      !password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
    ) {
      alert(
        "Please add a valid Password \npassword length should be atleat 8 which includes atleat: \n* one upper case \n* one number\n* one special char  \n (Ex: Abc@xyz123 )"
      );
      return;
    }

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
        alert("An account with the given email already exists");
        return;
      }
      console.log(data);
      alert("sign up successful");
      return navigate("/login");
    });
  };

  return (
    <div className="App_Main">
      <div>
      <div className="heading">SIGNUP FORM</div>
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
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="enter Password"
          required
        ></input>
        <div>
          <button className="btn" type="submit">
            Signup
          </button>
        </div>
      </form>
      <div className="btm_txt">
        Back to{" "}
        <Link to="/Login" className="btn_Link">
          login
        </Link>{" "}
        page
      </div>
      </div>
    </div>
  );
};

export default SignUp;
