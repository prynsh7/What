import React, { useState, useRef, useEffect } from "react";
import "./Login.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { auth, provider, provider2 } from "../../firebase";
import cogoToast from 'cogo-toast';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../../features/userSlice";
import { css } from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";
import { useNavigate } from "react-router";
import { Navigate } from 'react-router'


const override = css`
  display: block;
  margin: 20% auto;
  border-color: red;
`;


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailField = useRef(null);
  const passField = useRef(null);

  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#27B9AF");

const navigate = useNavigate();
  const signIn = async () => {

    await auth.signInWithPopup(provider).catch((e) => {
      cogoToast.error(e.message);
      setLoading(false)
    })

    navigate('/feed');



  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (emailField.current) {
        setEmail(emailField.current.value)
        //do the same for all autofilled fields
        clearInterval(interval)
      }
    }, 100)
  })



  const signInF = async() => {
    await auth.signInWithPopup(provider2).catch((e) => {
      alert(e.message);
      setLoading(false)
    });
    navigate('/feed');
  };

  const handleSignIn = async(e) => {
    e.preventDefault();
    await auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((e) => {
        cogoToast.error(e.message);
        setLoading(false);
      });

      navigate('/feed');

    setEmail('');
    setPassword('');
  };

  const registerSignIn = async (e) => {
    e.preventDefault();
    await auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          console.log(auth);
        }
      })
      .catch((e) => {alert(e.message); setLoading(false)});
      navigate('/feed');
  };

  const user = useSelector(selectUser);
  return (
    <>{ user ? <Navigate to='/feed' /> : 
    <>
      {loading ? <ClockLoader color={color} loading={true} css={override} size={150} /> :
        <div className="login" style={{ backgroundImage: "url(/img/wallpaper.png)" }}>
          <div className="login__container">
            <div className="login__left">
              <div className="login__logo__sec">
                <div className="login__logo">
                {/* https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png */}
                  <img
                    src="https://cdn.pixabay.com/photo/2013/07/12/16/50/comics-151341__340.png"
                    alt=""
                  />
                </div>
                <div className="login__desc">
                  <p>A Place to Share knowledge and better understand the world</p>
                  {/* <p style={{ color: "royalblue", fontSize: "25px" }}>
          HandCrafted with ❤️ 
        </p> */}

                </div>
              </div>

            </div>
            <div className="login__right">
              <div className="login__auth">

                <div className="login__emailPass">
                  <div className="login__label">
                    <h4>Sign In</h4>
                  </div>
                  <div className="login__inputFields">
                    <div className="login__inputField">
                      <input
                        ref={emailField}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Email"

                      />
                    </div>
                    <div className="login__inputField">
                      <input
                        autoComplete="none"
                        ref={passField}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="login__forgButt">
                    <small>Forgot Password?</small>

                  </div>
                  <div className="login__forgButt">
                    <button onClick={(e) => {handleSignIn(e); setLoading(true)}}>Login</button>
                  </div>

                </div>
              </div>
              <div className="login__divider"><h2>OR</h2></div>
              <div className="login__authOptions">
                <div className="login__authOption">
                  <img
                    className="login__googleAuth"
                    src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                    alt=""
                  />
                  <p onClick={() => {signIn()}}>Continue With Google</p>
                </div>
                <div className="login__authOption">
                  <img
                    className="login__googleAuth"
                    src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                    alt=""
                  />
                  <span onClick={signInF}>Continue With Facebook</span>
                </div>
                <div className="login__forgButt">
                  <small onClick={(e) => {registerSignIn(e); setLoading(true)}}>Don't have an account yet? sign up with email</small>
                </div>

                <div className="login__authDesc">
                  <p>
                    {/* <span style={{ color: "blue", cursor: "pointer" }}>
                Sign Up With Email
              </span> */}
                    By continuing you indicate that you have read and agree to
                    Quora's
                    {/* //<span style={{ color: "blue", cursor: "pointer" }}> */}
                    Terms of Service{" "}
                    {/* </span> */}
                    and{" "}
                    {/* <span style={{ color: "blue", cursor: "pointer" }}> */}
                    Privacy Policy
                    {/* </span> */}
                    .
                  </p>
                </div>
              </div>



              <div className="login__footer">
                <p>About</p>
                <p>Languages</p>
                <p>Careers</p>
                <p>Businesses</p>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Contact</p>

              </div>
              <div className="login__lang">
                <p style={{ marginLeft: "17px" }}>English</p>
                <ArrowDropDownIcon fontSize="small" style={{ color: "#27B9AF" }} />
                <p style={{ color: "gray", margin: "auto" }}>&copy; Quora Fake Inc. 2021</p>
              </div>

            </div>
          </div>
        </div>
        }
    </>
  }</>
  );
}

export default Login;