import {useEffect,useState} from 'react'
import './App.css';
import database from './firebase'
import firebase from 'firebase'

function App() {
  const [input, setInput]=useState('')

  const [list,setList]=useState([]);
  const [username,setUsername]=useState("Guest");

  useEffect(() => {
    const name=window.prompt("Enter a user name:");
    setUsername(name);
  }, [])

  useEffect(()=>{
    database.collection('messages').orderBy('timestamp','desc').onSnapshot((snapshot)=>{
      setList(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
      })))
    });
  },[])

  const sendMessage = (event) => {
    event.preventDefault();
    
    const chatMessage={
      name:username,
      message:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    }

    database.collection('messages').add(chatMessage)

    setInput("");
  };

  return (
    <div className='app'>
      <h1>This is Chat application</h1>

    {list.map(({id,data:{message, timestamp,name}})=>(
        <h3 key={id} className='chatMessage'>{name}:{message}</h3>
    ))}

      <form>  
      <input value ={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={sendMessage} type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
