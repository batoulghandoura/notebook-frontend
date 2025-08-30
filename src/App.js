import React, { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import NewNote from './components/NewNote/NewNote';

function App() {
    const [currentView, setCurrentView] = useState('home');
    const [notes, setNotes] = useState([]);
    // 1. NEW STATE: Track which note we are currently editing. Null means we are creating a new note.
    const [currentNote, setCurrentNote] = useState(null);

    const handleAddNewNote = (newNote) => {
        const noteToAdd = {
            id: Date.now(),
            title: newNote.title,
            content: newNote.content
        };
        setNotes([...notes, noteToAdd]);
        setCurrentView('home');
    };

    // 2. NEW FUNCTION: Handle UPDATING an existing note
    const handleUpdateNote = (updatedNote) => {
        // Map over the notes array. If we find the note with the matching ID, we replace it with the updated note.
        const updatedNotes = notes.map((note) =>
            note.id === currentNote.id ? {...updatedNote, id: currentNote.id } : note
        );
        setNotes(updatedNotes);
        setCurrentView('home');
        // Reset the currentNote state after editing is done
        setCurrentNote(null);
    };

    const handleDeleteNote = (idToDelete) => {
        const updatedNotes = notes.filter((note) => note.id !== idToDelete);
        setNotes(updatedNotes);
    };

    // 3. NEW FUNCTION: This function is called when the "Edit" button is clicked
    const handleEditNote = (noteToEdit) => {
        // Set the current note to be the one we want to edit
        setCurrentNote(noteToEdit);
        // Change the view to the form screen
        setCurrentView('new-note');
    };

    return ( 
    <div className = "App"> 
   
    { currentView === 'home' ? ( 
      <Home 
        notes = {notes}
        onNewNoteClick = {
            () => {
                setCurrentNote(null); // Ensure we are in "create" mode
                setCurrentView('new-note');
            }
        }
        onDeleteNote = {handleDeleteNote}
        // 4. PASS THE EDIT FUNCTION AS A PROP
        onEditNote = {handleEditNote}
        />
    ) : (
        // 5. PASS THE CURRENT NOTE AND THE RIGHT SAVE FUNCTION TO NewNote
        <NewNote 
        onSaveNote = {currentNote ? handleUpdateNote : handleAddNewNote} // If editing, use update. If not, use create.
        onCancelClick = {
            () => {
                setCurrentView('home');
                setCurrentNote(null); // Reset on cancel
            }
        }
        // 6. PASS THE EXISTING NOTE'S DATA TO PRE-FILL THE FORM
        existingNote = {currentNote}
        />
    )} 
    </div>
    );
}

export default App;