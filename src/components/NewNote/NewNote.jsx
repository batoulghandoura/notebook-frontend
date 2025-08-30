import React, { useState } from 'react';
import './NewNote.css';

// The component receives 'onSaveNote' and 'onCancelClick' as props
const NewNote = ({ onSaveNote, onCancelClick }) => {
  // 1. Create state for the note's title and content
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 2. Function to handle the form submission
  const handleSubmit = () => {
    // Basic validation: don't save if title is empty
    if (title.trim() === '') {
      alert('Please add a title for your note.');
      return;
    }
    // Call the function passed from App.js with the new note data
    onSaveNote({ title, content });
    // Clear the form fields
    setTitle('');
    setContent('');
  };

  return (
    <div className="container">
      <div className="header">
        <img src="/images/icons6-document.svg" className="note-icon" alt="Notes icon"/>
        <p>New Note</p>
      </div>

      <label htmlFor="note-title" style={{display: 'none'}}>Title</label>
      <input
        id="note-title"
        type="text"
        placeholder="Title"
        className="input1"
        // 3. Connect input to state
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
      <label htmlFor="note-content" style={{display: 'none'}}>Content</label>
      <textarea
        id="note-content"
        placeholder="Start writing your note..."
        className="input2"
        // 4. Connect textarea to state
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      
      <br/>
      <div className="button-container">
        {/* 5. Connect the Save button to the handleSubmit function */}
        <button className="btn" onClick={handleSubmit}>
          Save Note
        </button>
        <button className="cancel" onClick={onCancelClick}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NewNote;