import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Login from "./component/auth/Login";
import Quora from "./component/Quora";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { css } from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navigate } from 'react-router-dom'
const override = css`
  display: block;
  margin: 20% auto;
  border-color: red;
  size: 50;
`;


function App() {

  
const [loading, setLoading] = useState(false);
const [color, setColor] = useState("#27B9AF");

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const Handler = () => auth.onAuthStateChanged( async(authUser) => {
    setLoading(true);
    if (authUser) {
     dispatch(
        login({
          uid: authUser.uid,
          email: authUser.email,
          displayName: authUser.displayName,
          photo: authUser.photoURL,
        })
      );
      console.log(authUser);
      
      
    } else {
      setLoading(true) 
      dispatch(logout());
      
    }
    
  });

  useEffect(() => {
    Handler();
    
  }, [dispatch]);
  
  
  return <div className="App">
    <Router>
        <Routes>      
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/feed" element={<Quora />}></Route>  
        </Routes>

        {/* {loading ? <Navigate replace to="/" />  : <ClockLoader color={color} loading={true} css={override} size={150} /> } */}
      </Router>


    </div>;
}

export default App;