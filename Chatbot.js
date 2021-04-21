import React , {  useRef,useState }from "react";
import './Chatbot.css';
import SendIcon from '@material-ui/icons/Send';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({

  apiKey: "AIzaSyCyAHODvfcWlJaRCagcjGiQF3CJIt6jfkM",
  authDomain: "fireship-6aa59.firebaseapp.com",
  projectId: "fireship-6aa59",
  storageBucket: "fireship-6aa59.appspot.com",
  messagingSenderId: "263865490405",
  appId: "1:263865490405:web:56de4f7e1b99201451ed0c",
  measurementId: "G-KG6LGJH2CW"
})
const auth=firebase.auth();
const firestore=firebase.firestore();


function Chatbot(){
    const dummy=useRef();
    const [user] = useAuthState(auth);
    const messageRef=firestore.collection('message');
    const query= messageRef.orderBy('createdAt').limit(25);
    const [message]=useCollectionData(query,{idField:'id'});
    const [formValue , setFormValue]= useState('');
    const sendMessage = async(e)=>{
        e.preventDefault();
        const{ uid}=auth.user;
        await messageRef.add({
            text:formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid
        });
        setFormValue('');
        dummy.current.scrollIntoView({behavior:'smooth'});
    }

    return(
      <>
      <main className="color">
        {message && message.map()(msg=> <ChatMessage key={msg.id}message={msg}/>)}
        <span ref={dummy}></span>
        </main>
    <form onSubmit={sendMessage}>
      <input value={formValue} onChange={(e)=> setFormValue(e.target.value)}/>
      <button type="submit"><SendIcon/></button>
    </form>
      </>
    )
  
  }
  function ChatMessage(props){
    const {text,uid}=props.message;
    const messageClass=uid === auth.currentUser.uid ? 'send' : 'received';
    return(
      <div className={`message ${messageClass}`}>
  <p>
      {text}
    </p>
      </div>
      
    )
  }
  
  export default Chatbot;
  