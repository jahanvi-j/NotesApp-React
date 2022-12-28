import React from 'react'
import { MdDeleteForever } from 'react-icons/md';

const Note = ({id, text, date, handleDeleteNote}) => {
    return (
        <div className="note">
            <spam>{text}</spam>
            <div className = "note-footer">
                <small>{date}</small>
                <MdDeleteForever className = "delete-icon" size = "1.3cm" 
                onClick={() => handleDeleteNote(id)}/>              
            </div>
        </div>
    );
};

export default Note;