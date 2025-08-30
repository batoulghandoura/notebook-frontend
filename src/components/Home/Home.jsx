import React, {useState} from 'react'; 
import './Home.css';

const Home = ({notes, onNewNoteClick, onDeleteNote, onEditNote}) => {
  // 1. Create state for the search input
  const [searchText, setSearchText] = useState('');

  // 2. Filter the notes based on the search text
  const filteredNotes = notes.filter((note) => {
    const searchLower = searchText.toLowerCase();
    // Check if the search text is in the title OR the content
    return (
      note.title.toLowerCase().includes(searchLower) ||
      note.content.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="container">
      <div className="header">
        <img src="/images/icons8-document.svg" className="note-icon" alt="note" />
        <p>My Notes</p>
      </div>

      <p>Capture your thoughts, ideas, and inspiration in beautiful, searchable notes.</p>

      <div className="top">
        <div className="search">
          
    <img src="/images/icons8-search.svg" className="search-icon" alt="search" />
         
          {/* 3. Connect the input to the search state */}
          <input
            type="text"
            id="searchInput"
            placeholder="Search your notes..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <button className="btn" id="newNoteBtn" onClick={onNewNoteClick}>
          +  New Note
        </button>
      </div>

      <br/><br/>

      {/* 4. Use the FILTERED notes array instead of the original one */}
      {filteredNotes.length === 0 ? (
        <div className="nonote" id="noNotesAction">
          
      <img src="/images/icons8-document.svg" className="nonote-icon" alt="note" />

        {/* 5. Change the message based on search */}
        <p className="message">
          {searchText ? 'No matching notes found' : 'No notes yet'}
        </p>
        <p className="subtitle">
          {searchText ? 'Try a different search term' : 'Create your first note to get started'}
        </p>
        {!searchText && ( // Only show the button if we're not searching
          <button className="input1" onClick={onNewNoteClick}>
            +&nbsp;Create your first note
          </button>
        )}
      </div>
      ) : (
        <div className="notes" id="notesList">
          {/* Map over the FILTERED notes */}
          {filteredNotes.map((note) => (
            <div className="note" key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <div className="actions">
                <button className="btn" onClick={() => onEditNote(note)}>
                  Edit
                </button>
                <button className="btn" onClick={() => onDeleteNote(note.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;