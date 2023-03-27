import React from 'react';
import { useState, useContext } from 'react';
import NotesContext from '../context/notes-context';

const AddNoteForm = () => {
    const {dispatch} = useContext(NotesContext)
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    
    const addNote = (e) => {
      e.preventDefault()
      dispatch({type:'ADD_NOTE',
       title,
       body
        })
      setTitle('');
      setBody('')
    }
   
    return (
        <form onSubmit={addNote}>
          <input onChange={(e)=>{setTitle(e.target.value)}}></input>
          <textarea onChange={(e)=>{setBody(e.target.value)}}></textarea>
          <br></br>
          <button>Add note</button>
        </form>
    );
};

export default AddNoteForm;