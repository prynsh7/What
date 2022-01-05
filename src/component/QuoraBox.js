import { Avatar } from '@material-ui/core'
import React, {useState} from 'react'
import '../css/QuoraBox.css'
import { useSelector } from 'react-redux'
import {selectUser} from '../features/userSlice'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SendIcon from '@material-ui/icons/Send';
import Modal from 'react-modal'
import { ExpandMore, Link } from '@material-ui/icons/'
import firebase from 'firebase'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined'
import { Input } from '@material-ui/core'

import db, { auth } from "../firebase"


function QuoraBox() {
    const [openModal, setOpenModal] = useState(false);
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

    const user= useSelector(selectUser)
    return (
        <div className="quoraBox">
            <div className="quoraBox_info">
                <Avatar 
                src={user.photo}
                />
                <h5 onClick={() => setOpenModal(true)}>What is your Question or Link?</h5>
            </div>
            <div className="quoraBox_quora">
                <div className="quoraBox_icon">
                    <ImageOutlinedIcon />
                    <h5>Add image</h5>
                </div>
                <div className="quoraBox_icon">
                    <PublicOutlinedIcon />
                    <h5>Public</h5>
                    <KeyboardArrowDownIcon />
                </div>

                <div className="quoraBox_button" onClick={() => setOpenModal(true)}>
                
              <SendIcon/>
              <h5>Post</h5>
                </div>
            </div>
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

    )
}

export default QuoraBox 
