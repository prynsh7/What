import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import '../css/Post.css'

import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import MoreVertOutlined from "@material-ui/icons/MoreVert";
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux';
import {selectUser} from '../features/userSlice'
import {setQuestionInfo, selectQuestionId, selectQuestionName } from '../features/questionSlice';
import db from '../firebase';
import firebase from 'firebase'
import CloseIcon from '@material-ui/icons/Close';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import SyncIcon from '@material-ui/icons/Sync';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';


Modal.setAppElement('#root');

function Post({ Id, question, imageUrl, timestamp, users }) {
    
    const user = useSelector(selectUser)
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()

    const questionId = useSelector(selectQuestionId)
    //const questionName = useSelector(selectQuestionName)
    const [answer, setAnswer] = useState("")
    const [getAnswer, setGetAnswer] = useState([])

    useEffect(() => {
        if(questionId){
            db.collection('questions').doc(questionId).collection('answer').orderBy('timestamp', 'desc').onSnapshot(snapshot => setGetAnswer(snapshot.docs.map((doc)=> ({
                id: doc.id,
                answers: doc.data()
            }))))
        }
    })

    const handleAnswer = (e) => {
        e.preventDefault();
    
        if (questionId) {
          db.collection("questions").doc(questionId).collection("answer").add({
            user: user,
            answer: answer,
            questionId: questionId,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    
          });
        }
        console.log(questionId);
        setAnswer("");
        setOpenModal(false);
      };
    return (
        <div className="post"
        onClick = {() => dispatch(setQuestionInfo({
            questionId: Id,
            questionName: question
        }))}
        >
            <div className="post_info">
                <Avatar 
                src={
                    users.photo
                      ? users.photo
                      : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
                  }
                   
                />
                <div className="feed_person">
                <h5>{users.displayName ? users.displayName : users.email}</h5>
                <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
                </div>
                
                <div className="feed_end">
                  <div className="feed_follow">
                    <h5>Follow</h5>
                  </div>
                  <CloseIcon />
                  
                </div>
            </div>

            <hr />

            <div className="post_body">
                <div className="post_que">
                    <p>{question}</p>
                    <button className="post_btnAns" onClick = {() => setOpenModal(true)}>Answer</button>
                    <Modal
            isOpen={openModal}
            onRequestClose={() => setOpenModal(false)}
            shouldCloseOnOverlayClick={false}
            style={{
              overlay: {
                width: 680,
                height: 550,
                backgroundColor: "rgba(0,0,0,0.8)",
                zIndex: "1000",
                top: "50%",
                left: "50%",
                marginTop: "-250px",
                marginLeft: "-350px",
              },
            }}
          >
            <div className="modal__question">
              <h1>{question}</h1>
              <p>
                asked by{" "}
                <span className="name">
                  {users.displayName ? users.displayName : users.email}
                </span>{" "}
                {""}
                on{" "}
                <span className="name">
                  {new Date(timestamp?.toDate()).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <textarea
                required
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter Your Answer"
                type="text"
              />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setOpenModal(false)}>
                Cancel
              </button>
              <button  onClick={handleAnswer} type="sumbit"  className="add">
                Add Answer
              </button>
            </div>
          </Modal>

                </div>
                <div className="post_ans">
                {getAnswer.map(({ id, answers }) => (
            <p key={id} style={{ position: "relative", paddingBottom: "5px" }}>
              {Id === answers.questionId ? (
                <span>
                  {answers.answer}
                  <br />
                  <span
                    style={{
                      position: "absolute",
                      color: "gray",
                      fontSize: "small",
                      display: "flex",
                      right: "-6px",
                      top: "2px"
                    }}
                  >
                    <span style={{ color: "#b92b27" }}>
                      {answers.user.displayName
                        ? answers.user.displayName
                        : answers.user.email}{" "}
                      on{" "}
                      {new Date(answers.timestamp?.toDate()).toLocaleString()}
                    </span>
                  </span>
                </span>
              ) : (
                ""
              )}
            </p>
          ))}
                    
                </div>
                <img 
                //src="https://qphs.fs.quoracdn.net/main-qimg-6c78ed5af6f4e0474a7fc413a75af20f"
                src={imageUrl}
                alt=""
                />
            </div>
            <div className="post_footer">
            <div className="post__footerAction">
          <ThumbUpAltOutlinedIcon />
          <p>100+</p>
        </div>

        <div className="post__footerAction">
        <SyncIcon />
          <p>50</p>
        </div>
        <div className="post__footerAction">
        <ChatBubbleOutlineOutlinedIcon />
          <p>40 answers</p>
        </div>
        
        
        <div className="post__footerLeft">
          <BookmarkBorderIcon />
          <MoreVertOutlined />
        </div>
            </div>
        </div>
    )
}

export default Post
