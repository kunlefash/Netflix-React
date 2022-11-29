import "./register.scss";
import { useState } from "react";
import { useRef } from "react";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setPassword(emailRef.current.value);
  };
  const handleFinish = () => {
    setEmail(passwordRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="" alt="" />

          <button className="loginButtom">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited moviese, Tv shows and more.</h1>
        <h2>Watch Anywhere, cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
