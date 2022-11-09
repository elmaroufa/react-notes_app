import React from 'react';
import { Link } from 'react-router-dom';


 const ListItem = ({note}) => {

  let getTitle = (note) => {
    const title = note.body.split('\n')[0]
    if(title.length > 45){
      return title.slice(0, 45)
    }
    return title
    
  }
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
    { getTitle(note)}
    <p><span>{note.updated}</span></p>
    </div>
    </Link>  
  )
}

export default ListItem
