import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Login = () => {
    const [username,setusername] = useState("Username");
    const [email,setemail] = useState("Email");
    const [phone,setphone] = useState("Phone");
    const [password,setpassword] = useState("********")

  return (
    <div className="hehe">
      <div className="h1">
        <b>Sign Up</b>
        <a href="#" className="a">Already a Customer?</a>
      </div>
      <form method="get">
        <div>
          <label htmlFor="username">Enter your full name:</label><br />
          <input type="text" id="username" required placeholder={username} onChange={(e) => setusername(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="user_email">Enter your email:</label><br />
          <input type="email" id="user_email" name="user_email" required placeholder={email} onChange={(e) => setemail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="user_phone">Enter your phone number:</label><br />
          <input type="tel" id="user_phone" name="user_phone" placeholder={phone} onChange={(e) => setphone(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="user_dob">Enter your date of birth:</label><br />
          <input type="date" id="user_dob" name="user_dob" />
        </div>
        <div>
          <label htmlFor="user_pwd">Enter Password:</label><br />
          <input type="password" id="user_pwd" name="user_pwd" required minLength="6" maxLength="15"placeholder={password} onChange={(e) => setpassword(e.target.value)} />
        </div>
        
        <div className="button">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className="god">
        <a  href="#" className="Google">
            <FaGoogle /> 
            <a className="he" href='#'>Continue with Google</a>
        </a>
        <a  href="#" className="facebook">
            <FaFacebook /> 
            <a className="heya" href='#'>Continue with Facebook</a>
        </a>
      </div>
    </div>
  );
}

export default Login;