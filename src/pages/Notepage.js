import React, { useState, useEffect } from 'react';
import {useParams, Link, useNavigate} from 'react-router-dom';
//import  notes from '../assets/data';
import { ReactComponent as ArrowLeft} from '../assets/arrow-left.svg';

const Notepage = () => {
  const params = useParams()
  const history = useNavigate()
  console.log("myobjetc:", params);
  //let note = notes.find(note => note.id === Number(params.id))
  let noteId = Number(params.id)
  let [note, setNote] = useState(null)
  useEffect(()=> {
    getNote()
  },[noteId])

  let getNote = async() => {
    if (noteId === 'new') return
    let response = await fetch(`http://localhost:8000/notes/${noteId}`)
    let data = await response.json()
    setNote(data)
  } 
  let updateNote = async() => {
    await fetch(`http://localhost:8000/notes/${noteId}`,{
     method: 'PUT',
     headers: {
       'Content-Type' : 'application/json'
     },
     body: JSON.stringify({ ...note, 'updated': new Date()})
    });
  }

  let createteNote = async() => {
    await fetch('http://localhost:8000/notes/',{
     method: 'POST',
     headers: {
       'Content-Type' : 'application/json'
     },
     body: JSON.stringify({ ...note, 'updated': new Date()})
    });
  }

  let deleteNote = async() => {
    await fetch(`http://localhost:8000/notes/${noteId}`,{
     method: 'DELETE',
     headers: {
       'Content-Type' : 'application/json'
     },
     body: JSON.stringify({note})
    });
    history('/', {replace:true})
  }

  let handleSubmit = () => {

    if (noteId !== 'new' && !note.body){
       deleteNote()
    } else if (noteId === 'new'){
      updateNote()
    }
    else if(noteId === 'new' && note !== null) {
        createteNote()
    }
    history('/', {replace:true})
  }
  return (
    <div className="note">
      <div className="note-header">
        <h3>
        <Link to="/">
         <ArrowLeft onClick={handleSubmit}/>
        </Link>
        </h3>
        {noteId !== 'new' ? (
          <button onClick={deleteNote}>DELETE</button>
        ) : (<button onClick={handleSubmit}>DONE</button>) }

      </div> 
     <textarea onChange={(e)=> setNote({...note ,'body': e.target.value})} value={note?.body}>

     </textarea>
    </div>
  )
}

export default Notepage