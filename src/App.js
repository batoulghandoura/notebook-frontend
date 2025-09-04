import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Home from './components/Home/Home';
//import NewNote from './components/NewNote/NewNote';

function App() {
    const [currentView, setCurrentView] = useState('home');
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState(null);

// ================================= GET ALL NOTES FROM API =============================
const getAllNotes = async () => {
    try {
        const res = await axios.get(`http://127.0.0.1:8000/api/notes`);
                    
        // Sort notes by updated_at timestamp (most recent first)
        const sortedNotes = res.data.sort((a, b) => {
            return new Date(b.updated_at) - new Date(a.updated_at);
        });

        setNotes(sortedNotes);
        console.log('Notes fetched:', res.data);
    } catch (error) {
        console.error("Error getting all notes", error);
    }
};

// ================================= ADD NEW NOTE TO API =============================
const handleAddNewNote = async (newNote) => {
    const payload = {
        title: newNote.title,  // Use newNote.title instead of title
        content: newNote.content,  // Use newNote.content instead of content
    };

    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/notes`, payload);  // Fixed endpoint
        console.log('Note saved:', res.data);

        // Refresh the notes list from the server
        await getAllNotes();
      //  setCurrentView('home');
    } catch (error) {
        console.error("Error Saving New Note", error);
    }
};

// ================================= UPDATE EXISTING NOTE IN API ====================
const handleUpdateNote = async (updatedNote, noteToUpdate) => {
    if (!noteToUpdate) return;

    const payload = {
        title: updatedNote.title,  // Use updatedNote.title instead of title
        content: updatedNote.content,  // Use updatedNote.content instead of content
    };

    try {
        const res = await axios.put(`http://127.0.0.1:8000/api/notes/${noteToUpdate.id}`, payload);
        console.log('Note updated:', res.data);
            
        // Refresh the notes list from the server
        await getAllNotes();
     //   setCurrentView('home');
     //   setCurrentNote(null);
    } catch (error) {
        console.error("Error updating note", error);
    }
};

// ================================= HANDLE SAVE NOTE (NEW OR UPDATE) ===============
const handleSaveNote = async (noteData, existingNote = null) => {
    if (existingNote) {
        // Update existing note
        await handleUpdateNote(noteData, existingNote);
    } else {
        // Create new note
        await handleAddNewNote(noteData);
    }
};

// ================================= DELETE NOTE FROM API ========================
const handleDeleteNote = async (idToDelete) => {
    try {
        await axios.delete(`http://127.0.0.1:8000/api/notes/${idToDelete}`);
        console.log('Note deleted');
        
        // Refresh the notes list from the server
        await getAllNotes();
    } catch (error) {
        console.error("Error deleting note", error);
    }
};

// This function is called when the "Edit" button is clicked
const handleEditNote = (noteToEdit) => {
    setCurrentNote(noteToEdit);
  //  setCurrentView('new-note');
};

// Handle new note creation
const handleNewNoteClick = () => {
    setCurrentNote(null);
};


// ============================== LOAD NOTES ON COMPONENT MOUNT ==============
useEffect(() => {
    getAllNotes();
}, []);
/*
    return ( 
        <div className="App"> 
            {currentView === 'home' ? ( 
                <Home 
                    notes={notes}
                    onNewNoteClick={() => {
                        setCurrentNote(null);
                        setCurrentView('new-note');
                    }}
                    onDeleteNote={handleDeleteNote}
                    onEditNote={handleEditNote}
                />
            ) : (
                <NewNote 
                    onSaveNote={currentNote ? handleUpdateNote : handleAddNewNote}
                    onCancelClick={() => {
                        setCurrentView('home');
                        setCurrentNote(null);
                    }}
                    existingNote={currentNote}
                />
            )} 
        </div>
    );
    */

     return ( 
        <div className="App"> 
            <Home 
                notes={notes}
                onNewNoteClick={handleNewNoteClick}
                onDeleteNote={handleDeleteNote}
                onEditNote={handleEditNote}
                onSaveNote={handleSaveNote}
            />
        </div>
    );
}

export default App;