import React, {useState} from 'react'; 
import './Home.css';
import NewNote from '../NewNote/NewNote';

  const Home = ({notes, onNewNoteClick, onDeleteNote, onEditNote, onSaveNote, onCancelEdit}) => {
  const [searchText, setSearchText] = useState('');
  const [editingNote, setEditingNote] = useState(null);
  const [showNewNoteForm, setShowNewNoteForm] = useState(false);

  // Filter the notes based on the search text (only for sidebar)
  const filteredNotesForSidebar = notes.filter((note) => {
    const searchLower = searchText.toLowerCase();
    return (
      note.title.toLowerCase().includes(searchLower) ||
      note.content.toLowerCase().includes(searchLower)
    );
  });

  
const handleNewNoteClick = () => {
    setEditingNote(null);
    setShowNewNoteForm(true);
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
    setShowNewNoteForm(false);
  };

  const handleSaveNote = (noteData) => {
    onSaveNote(noteData);
    setEditingNote(null);
    setShowNewNoteForm(false);
  };

  const handleUpdateNote = (noteData) => {
    // Call the parent's update function with the note data and current editing note
    onSaveNote(noteData, editingNote);
    setEditingNote(null);
    setShowNewNoteForm(false);
  };

  const handleCancelEdit = () => {
    setEditingNote(null);
    setShowNewNoteForm(false);
  };


  return (
    <div className="app-layout">
      {/* Main Content Area */}
      <div className="main-content">
        {/* Show header only in default view */}
    {!(showNewNoteForm || editingNote) && (
      <div className="header">
        <img src="/images/icons8-document.svg" className="note-icon" alt="note" />
        <p>My Notes</p>
      </div>
    )}

{showNewNoteForm || editingNote ? (
    // ================= NEW NOTE / EDIT FORM =================
    <NewNote
      existingNote={editingNote}
      onSaveNote={editingNote ? handleUpdateNote : handleSaveNote}
      onCancelClick={handleCancelEdit}
    />
  ) : (
    // ================= DEFAULT CONTENT =================
    <>
    <p>Capture your thoughts, ideas, and inspiration in beautiful, searchable notes.</p>

<br/><br/>

        <button className="new-note-main" onClick={handleNewNoteClick}>
          + New Note
        </button>

        {/* Display selected note content or welcome message */}
        <div className="note-display">
          <p>Select a note from the sidebar to view and edit it here.</p>
        </div>
 
<div className="notes-list">
      {notes.length === 0 ? (
  <div className="no-notes">
    <br/><br/>
      <img src="/images/icons8-document.svg" className="nonote-icon" alt="note" />
      <p className="message">No notes yet</p>
      <p className="subtitle">Create your first note to get started</p>
    
  </div>
     ) : (
          notes.map((note) => (
            <div 
              className="note-item" 
              key={note.id} 
              onClick={() => handleEditNote(note)}
            >
              <h4>{note.title}</h4>
              <p className="note-preview">
                {note.content.length > 200 
                  ? note.content.substring(0, 200) + "..." 
                  : note.content
                }
              </p>
                <div className="note-actions">
                  <button 
                    className="edit-btn" 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditNote(note);
                    }}
                  >
                    <img src="/images/icons8-edit-pencil.svg" className="edit-icon" alt="edit" />
                  </button>
                  <button 
                    className="delete-btn" 
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteNote(note.id);
                    }}
                  >
                    <img src="/images/icons8-trash.svg" className="delete-icon" alt="note" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </>   
      )}
    </div>

  {/* Floating Action Button */}
  <button className="floating-add-btn" onClick={handleNewNoteClick} title="Add new note">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>

  {/* Right Sidebar */}
  <div className="sidebar">
    <div className="search">
      <img src="/images/icons8-search.svg" className="search-icon" alt="search" />
      <input
        type="text"
        id="searchInput"
        placeholder="Search your notes..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>

    <div className="notes-list">
      {filteredNotesForSidebar.length === 0 ? (
        <div className="no-notes">
          <img src="/images/icons8-document.svg" className="nonote-icon" alt="note" />
          <p className="message">
            {searchText ? 'No matching notes found' : 'No notes yet'}
          </p>
          <p className="subtitle">
            {searchText ? 'Try a different search term' : 'Create your first note to get started'}
          </p>
        </div>
          ) : (
          filteredNotesForSidebar.map((note) => (
            <div 
              className="note-item" 
              key={note.id} 
              onClick={() => handleEditNote(note)}
            >
              <h4>{note.title}</h4>
           
           {/*
           <p className="note-preview">
                {note.content.length > 50 
                  ? note.content.substring(0, 50) + "..." 
                  : note.content
                }
              </p>
           */}

      <div className="note-actions">
        <button 
          className="edit-btn" 
          onClick={(e) => {
            e.stopPropagation();
            handleEditNote(note);
          }}>
          <img src="/images/icons8-edit-pencil.svg" className="edit-icon" alt="edit" />
        </button>
        <button 
          className="delete-btn" 
          onClick={(e) => {
            e.stopPropagation();
            onDeleteNote(note.id);
          }}>
          <img src="/images/icons8-trash.svg" className="delete-icon" alt="note" />
        </button>
        </div>
      </div>
    ))
  )}
    </div>
  </div>
</div>
);
};

export default Home;