import React from 'react';
import {useParams, Link} from 'react-router-dom';
import  notes from '../assets/data';
import { ReactComponent as ArrowLeft} from '../assets/arrow-left.svg';

const Notepage = () => {
  const params = useParams()
  console.log("myobjetc:", params);
  let note = notes.find(note => note.id === Number(params.id))
  return (
    <div className="note">
      <div className="note-header">
        <Link to="/">
        <h3> <ArrowLeft/></h3>
        </Link>
      </div> 
     <textarea value={note?.body}>

     </textarea>
    </div>
  )
}

export default Notepage