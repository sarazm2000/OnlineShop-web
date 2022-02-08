import React, { useState } from "react";
import "./App.css";
import { useSpring, animated } from "react-spring";

const App = () => {
  const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
  const loginProps = useSpring({ 
    left: registrationFormStatus ? -500 : 0, 
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 500, 
  });

  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus 
      ? "solid 0px transparent"
      : "solid 4px #1b1919",  
  });
  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 4px #1b1919"
      : "solid 0px transparent", 
  });

  function registerClicked() {
    setRegistartionFormStatus(true);
  }
  function loginClicked() {
    setRegistartionFormStatus(false);
  }

  return (
    <div className="login-register-wrapper ui form">
      <div className="nav-buttons">
        <animated.button
          onClick={loginClicked}
          id="loginBtn"
          style={loginBtnProps}
        >
          ورود
        </animated.button>
        <animated.button
          onClick={registerClicked}
          id="registerBtn"
          style={registerBtnProps}
        >
          ثبت نام
        </animated.button>
      </div>
      <div className="form-group ui form">
        <animated.form action="" id="loginform" style={loginProps}>
          <LoginForm />
        </animated.form>
        <animated.form action="" id="registerform" style={registerProps}>
          <RegisterForm />
        </animated.form>
      </div>
      <animated.div className="forgot-panel" style={loginProps}>
        <a herf="#">رمز عبور خود را فراموش کرده اید؟</a>
      </animated.div>
    </div>
  );
}

const LoginForm = () => {
  return (
    <React.Fragment>
      <label for="username" >نام کاربری</label>
      <input type="text" id="username" placeholder="نام کاربری" />
      <label for="password">رمزعبور</label>
      <input type="text" id="password" placeholder="رمزعبور" />
      <input type="submit" value="تایید" className="submit " />
    </React.Fragment>
  );
}

const RegisterForm = () => {
  return (
    <React.Fragment>
      <label for="username">نام کاربری</label>
      <input type="text" id="username" placeholder="نام کاربری" />
      <label for="email">ایمیل</label>
      <input type="text" id="email" placeholder="ایمیل"/>
      <label for="password">رمزعبور</label>
      <input type="text" id="password" placeholder="رمزعبور" />
      <label for="confirmpassword">تکرار رمزعبور</label>
      <input type="text" id="confirmpassword" placeholder="تکرار رمزعبور" />
      <input type="submit" value="تایید" className="submit" />
    </React.Fragment>
  );
}

export default App;