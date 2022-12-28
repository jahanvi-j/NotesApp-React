import Note from'./Note';
import AddNote from './AddNote';
import React from 'react';


const NotesList = ({ notes , handleAddNote , handleDeleteNote }) => {
    return (
        <div className = "notes-list">
            {notes.map((note)=> (
            <Note 
                id = {note.id} 
                text={note.text} 
                date= {note.date}
                handleDeleteNote={handleDeleteNote} />
            ))}
            <AddNote handleAddNote = {handleAddNote}/>
        </div>
    );
};

export default NotesList;

//parse data through bunch of different components - props drilling, 
// with too many components using context api makes it better
