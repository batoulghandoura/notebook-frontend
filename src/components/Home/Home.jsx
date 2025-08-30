import React from 'react';
import './Home.css';

// The component now receives 'notes' and 'onNewNoteClick' as props
const Home = ({ notes, onNewNoteClick , onDeleteNote}) => {
  return (
    <div className="container">
      <div className="header">
        <img src="/images/icons6-document.svg" className="note-icon" alt="note" />
        <p>My Notes</p>
      </div>

      <p>Capture your thoughts, ideas, and inspiration in beautiful, searchable notes.</p>

      <div className="top">
        <div className="search">
          <img src="/images/icons6-search.svg" className="search-icon" alt="Search" />
          <input type="text" placeholder="Search your notes..." id="searchInput" />
        </div>
        <button className="btn" id="newNoteBtn" onClick={onNewNoteClick}>
          + New Note
        </button>
      </div>

      <br/><br/>

      {/* Conditionally render based on whether notes exist */}
      {notes.length === 0 ? (
        // Show this if there are NO notes
        <div className="nonote" id="noNotesAction">
          <img src="/images/icons6-document.svg" className="nonote-icon" alt="No notes" />
          <p className="message">No notes yet</p>
          <p className="subtitle">Create your first note to get started</p>
          <button className="input1" onClick={onNewNoteClick}>
            + Create your first note
          </button>
        </div>
      ) : (
        // Show this if there ARE notes
        <div className="notes" id="notesList">
          {/* Map over the notes array and render each note */}
          {notes.map((note) => (
            <div className="note" key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <div className="actions">
                <button className="btn">Edit</button>
                <button className="btn" onClick={() => onDeleteNote(note.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;