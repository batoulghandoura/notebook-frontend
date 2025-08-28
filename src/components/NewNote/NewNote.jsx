import React from 'react'
import './NewNote.css'

export const NewNote = () => {
  return  (
    <div className="container">
        <div className="header">
        <img src="../images/icons8-document.svg" className="note-icon" alt="Notes icon"/>
        <p>New Note</p>
        </div>

        <label for="note-title" style="display:none;">Title</label>
        <input id="note-title" type="text" placeholder="Title" className="input1"/>
        <label for="note-content" style="display:none;">Content</label>

        <input id="note-content" placeholder="Start writing your note..." className="input2"/>
        <hr/>
        <div className="button-container">
            <button className="btn">Save Note</button>
            <button className="cancel">Cancel</button>
        </div>
    </div>
  );
}

export default NewNote;