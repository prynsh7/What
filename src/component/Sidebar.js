import React, { useState } from 'react'
import '../css/Sidebar.css'
import '../css/tailwind.css'
import HomeIcon from '@material-ui/icons/Home'
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined'
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined'
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar, Button, Input } from '@material-ui/core'
import LanguageIcon from '@material-ui/icons/Language'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import db, { auth } from "../firebase";
import Modal from 'react-modal'
import { ExpandMore, Link, PhotoSizeSelectLargeOutlined } from '@material-ui/icons/'
import firebase from 'firebase'
import MoreVertOutlined from "@material-ui/icons/MoreVert";
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { useNavigate } from 'react-router'

function Sidebar() {
    const user= useSelector(selectUser)
    const [openModal, setOpenModal] = useState(false)

    const [login, setLogin] = useState(false);

    const [input, setInput] = useState("")
    const[inputUrl, setInputUrl] = useState("")

    
    const handleQuestion = (e) => {
        e.preventDefault()

        setOpenModal(false)

        db.collection('questions').add({
            question: input,
            imageUrl: inputUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user
        })

        setInput("");
        setInputUrl("");
    }

    const navigate = useNavigate();
    return (
        <>
        <div className='sidebar_mobile'>
        <div class="flex flex-col items-center w-16 h-full overflow-hidden text-gray-700 bg-white-100 rounded">
		<a class="flex items-center justify-center mt-3" href="#">
			<svg class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
				<path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
			</svg>
		</a>
		<div class="flex flex-col items-center mt-3 border-t border-gray-300">
			<a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="#">
				<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				 	<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
				</svg>
			</a>
			<a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="#">
				<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
			</a>
			<a class="flex items-center justify-center w-12 h-12 mt-2 bg-gray-300 rounded" href="#">
				<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
				</svg>
			</a>
			<a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="#">
				<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
				</svg>
			</a>
		</div>
		<div class="flex flex-col items-center mt-2 border-t border-gray-300">
			<a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="#">
				<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
				</svg>
			</a>
			<a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="#">
				<svg class="w-6 h-6 stroke-current"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
				</svg>
			</a>
			<a class="relative flex items-center justify-center w-12 h-12 mt-2 hover:bg-gray-300" href="#">
				<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
				</svg>
				<span class="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
			</a>
		</div>
		<a class="flex items-center justify-center w-16 h-16 mt-auto bg-gray-200 hover:bg-gray-300" href="#">
			<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		</a>
	</div>
        </div>
        <div className="sidebar">

            <div className="sidebar_top">

                <div className="sHeader_logo">
                    {/* <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/640px-Quora_logo_2015.svg.png"
                        alt=""
                    /> */}
                    <h3>WHAT?</h3>
                    <MoreVertOutlined />
                    
                </div>
                <div className="sHeader_search">

                    <SearchIcon />
                    <input type="text" placeholder="Search Quora" />
                </div>
                <div className="rem">
                    <div className="pDetails">
                        <div className="sHeader_avatar">
                            <Avatar
                                onClick={() => { auth.signOut(); navigate('/');  }}
                                src={user.photo}
                            />
                        </div>
                        <h5>{user.displayName}</h5>
                        <SettingsIcon />
                    </div>
                    <div className="sHeader_icons">
                <div className="sHeader_icon">
                    <HomeIcon />

                </div>
                <div className="sHeader_icon">
                    <FeaturedPlayListOutlinedIcon />
                    
                </div>
                <div className="sHeader_icon">
                    <AssignmentTurnedInOutlinedIcon />
                    
                </div>
                <div className="sHeader_icon">
                    <PeopleAltOutlinedIcon />
                </div>
                <div className="sHeader_icon">
                    <NotificationsOutlinedIcon />
                </div>
                <div className="sHeader_icon">
                <LanguageIcon />
                </div>
                
            </div>
            <Button onClick = {() => setOpenModal(true)}>Add Question</Button>
            <Modal
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
        >
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar
              className="avatar"
              src={
                user.photo
              }
            />
            <p>{user.disPlayName ? user.disPlayName : user.email} asked</p>
            <div className="modal__scope">
              <PeopleAltOutlinedIcon />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className="modal__Field">
            <Input
            required
            value = {input}
            onChange = {(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            />
            <div className="modal__fieldLink">
              <Link />
              <input
              value = {inputUrl}
              onChange = {(e) => setInputUrl(e.target.value)}
                type="text"
                placeholder="Optional: inclue a link that gives context"
              ></input>
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setOpenModal(false)}>
              Cancel
            </button>
            <button type="sumbit" onClick = {handleQuestion} className="add">
              Add Question
            </button>
          </div>
        </Modal>

                </div>
                <div className="rem_que">
                    <div className="rem_que_header">
                        <h3>can you answer these questions?</h3>
                        <ArrowForwardIosIcon />
                    </div>
                    <div className="rem_que_content">
                        <div className="rem_que_que">
                            <h3>What did you see that looks weird?</h3>
                            <MoreVertOutlined />
                            
                        </div>
                        <div className="rem_que_buttons">
                            <div className="rem_que_btn_ans">
                            <ChatBubbleOutlineOutlinedIcon />
                            <p>Answer</p>
                            </div>
                            
                            <div className="rem_que_btn_ans">
                            <ControlPointIcon />
                            <p>Follow Question </p>
                            </div>
                        </div>
                    </div>

                    <div className="rem_que_content">
                        <div className="rem_que_que">
                            <h3>What did you see that looks weird?</h3>
                            <MoreVertOutlined />
                        </div>
                        <div className="rem_que_buttons">
                        <div className="rem_que_btn_ans">
                            <ChatBubbleOutlineOutlinedIcon />
                            <p>Answer</p>
                            </div>
                            
                            <div className="rem_que_btn_ans">
                            <ControlPointIcon />
                            <p>Follow Question</p>
                            </div>
                        
                        </div>
                    </div>

                    <div className="rem_que_content">
                        <div className="rem_que_que">
                            <h3>What did you see that looks weird?</h3>
                            <MoreVertOutlined />
                        </div>
                        <div className="rem_que_buttons">
                        <div className="rem_que_btn_ans">
                            <ChatBubbleOutlineOutlinedIcon />
                            <p>Answer</p>
                            </div>
                            
                            <div className="rem_que_btn_ans">
                            <ControlPointIcon />
                            <p>Follow Question </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


             <div className="sidebar_bottom">
                <div className="sBottom_t">
                <h2>Impove Your Feed</h2>    
                </div>     

                <hr />

                <div className="sBottom_r">
                <div className="sBottom_r_f">
                <CheckBoxOutlineBlankIcon />
                    <p> Visit your feed</p>
                </div>
                    <ArrowForwardIosIcon  />
                </div>

                <div className="sBottom_r">
                <div className="sBottom_r_f">
                <CheckBoxOutlineBlankIcon />
                    <p>Fllow 5 more Spaces</p>
                </div>
                    <ArrowForwardIosIcon />
                </div>

                <div className="sBottom_r">
                <div className="sBottom_r_f">
                <CheckBoxOutlineBlankIcon />
                    <p>Upvote 5 more good pieces of content</p>
                </div>
                    <ArrowForwardIosIcon />
                </div>

                <div className="sBottom_r">
                <div className="sBottom_r_f">
                <CheckBoxOutlineBlankIcon />
                    <p> Ask a question</p>
                </div>
                    <ArrowForwardIosIcon />
                </div>
                <div className="sBottom_r">
                <div className="sBottom_r_f">
                <CheckBoxOutlineBlankIcon />
                    <p> Answer a question</p>
                </div>
                    <ArrowForwardIosIcon />
                </div>
            </div> 
            {/* <SidebarOptions /> */}

        </div>
        </>
    )
}
export default Sidebar
