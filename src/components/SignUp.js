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
      <link rel="stylesheet" 
          href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="heading">SIGNUP FORM</div>
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
                placeholder="ENTER EMAIL"
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
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="ENTER PASSWORD"
          
            required
          ></input>
          </div>
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
