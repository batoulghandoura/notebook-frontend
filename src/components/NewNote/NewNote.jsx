import React from 'react'
import './NewNote.css'

export const NewNote = () => {
  return  (
    <div class="container">
        <div class="header">
        <img src="../images/icons8-document.svg" class="note-icon" alt="Notes icon"/>
        <p>New Note</p>
        </div>

        <label for="note-title" style="display:none;">Title</label>
        <input id="note-title" type="text" placeholder="Title" class="input1"/>
        <label for="note-content" style="display:none;">Content</label>

        <input id="note-content" placeholder="Start writing your note..." class="input2"/>
        <hr/>
        <div class="button-container">
            <button class="btn">Save Note</button>
            <button class="cancel">Cancel</button>
        </div>
    </div>
  );
}

export default NewNote;