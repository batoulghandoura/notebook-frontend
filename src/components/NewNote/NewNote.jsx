import React, { useState } from 'react';
import './NewNote.css';

// The component receives 'onSaveNote', 'onCancelClick', AND 'existingNote'
const NewNote = ({ onSaveNote, onCancelClick, existingNote }) => {
  console.log('Existing Note recieved in NewNote:', existingNote);
  // 1. Initialize state with the existing note's data, or empty strings if it's a new note
  const [title, setTitle] = useState(existingNote ? existingNote.title : '');
  const [content, setContent] = useState(existingNote ? existingNote.content : '');

  // 2. Function to handle the form submission
  const handleSubmit = () => {
    if (title.trim() === '') {
      alert('Please add a title for your note.');
      return;
    }
    // Call the save function (could be add or update) with the form data
    onSaveNote({ title, content });

    // 3. ONLY reset the form if we are creating a NEW note
    if (!existingNote) {
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="container">
      <div className="header">
       <img src="https://cdn.jsdelivr.net/npm/heroicons@v1.0.1/outline/document.svg" className="note-icon" alt="note" />
        {/* 4. Change the heading based on the mode */}
        <p>{existingNote ? 'Edit Note' : 'New Note'}</p>
      </div>

      <label htmlFor="note-title" style={{display: 'none'}}>Title</label>
      <input
        id="note-title"
        type="text"
        placeholder="Title"
        className="input1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
      <label htmlFor="note-content" style={{display: 'none'}}>Content</label>
      <textarea
        id="note-content"
        placeholder="Start writing your note..."
        className="input2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      
      <br/>
      <div className="button-container">
        {/* 5. Change the button text based on the mode */}
        <button className="btn" onClick={handleSubmit}>
          {existingNote ? 'Update Note' : 'Save Note'}
        </button>
        <button className="cancel" onClick={onCancelClick}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NewNote;