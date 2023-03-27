import React from 'react';
import { useContext } from 'react';
import NotesContext from '../context/notes-context';

import Note from '../components/Note'

const NoteList = () => {
    const {notes} = useContext(NotesContext)
    return notes.map((note)=>(
            <Note key={note.title} note={note}/>
          )
        )

};

export default NoteList;