import React from 'react'
import { Navigate } from 'react-router'
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice";
import "../css/Quora.css"
import Feed from './Feed'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Widget from './Widget'

function Quora() {
    const user = useSelector(selectUser);
    return (
        
        <>
        {user ? <div className="quora">
        <Navbar />
        <div className="quora__content">
            <Sidebar/>
            <Feed />
        </div> </div> : <Navigate to='/' /> }
        
    
    </>
    )
}

export default Quora
