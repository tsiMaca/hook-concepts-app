import React from "react";
import { useReducer, useEffect } from "react";
import NoteList from "../components/NoteList";
import AddNoteForm from "./AddNoteForm";
import notesReducer from "../reducers/notes";
import NotesContext from "../context/notes-context";

const NoteApp = () => {
    const [notes, dispatch] = useReducer(notesReducer,[])
       useEffect(() => {
         const notes = JSON.parse(localStorage.getItem('notes'))
     
         if (notes) {
           dispatch({type:'POPULATE_NOTES', notes})  
         }
     }, [])
     
     useEffect(() => {
         localStorage.setItem('notes', JSON.stringify(notes))
     }, [notes]) 
    return (
      <NotesContext.Provider value={{notes, dispatch}}>
        <h1>Notes</h1>
        <p>Add Notes</p>
        <NoteList/>
        <AddNoteForm/>
      </NotesContext.Provider>
    )
  }
  export default NoteApp;