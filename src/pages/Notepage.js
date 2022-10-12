import React from 'react';
import {useParams, Link} from 'react-router-dom';
import  notes from '../assets/data';

const Notepage = () => {
  const params = useParams()
  console.log("myobjetc:", params);
  let note = notes.find(note => note.id === Number(params.id))
  return (
    <div> <p>this is my :
      { note?.body}
      </p>
    </div>
  )
}

export default Notepage