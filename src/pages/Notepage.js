import React, { useState, useEffect } from 'react';
import {useParams, Link} from 'react-router-dom';
//import  notes from '../assets/data';
import { ReactComponent as ArrowLeft} from '../assets/arrow-left.svg';

const Notepage = () => {
  const params = useParams()
  console.log("myobjetc:", params);
  //let note = notes.find(note => note.id === Number(params.id))
  let noteId = Number(params.id)
  let [note, setNote] = useState(null)
  useEffect(()=> {
    getNote()
  },[noteId])
  let getNote = async() => {
    let response = await fetch(`http://localhost:8000/notes/${noteId}`)
    let data = await response.json()
    setNote(data)
  } 
  let updateNote = async() => {
    await fetch(`http://localhost:8000/notes/${noteId}`,{
     method: 'PUT',
     header: {
       'Content-Type' : 'application/json'
     },
     body: JSON.stringify({ ...note, 'updated': new Date()})
    });
  }
  return (
    <div className="note">
      <div className="note-header">
        <Link to="/">
        <h3> <ArrowLeft/></h3>
        </Link>
      </div> 
     <textarea onChange={(e)=> setNote({...note ,'body': e.target.value})} value={note?.body}>

     </textarea>
    </div>
  )
}

export default Notepage