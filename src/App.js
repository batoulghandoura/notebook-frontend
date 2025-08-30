import React, { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import NewNote from './components/NewNote/NewNote';

function App() {
    const [currentView, setCurrentView] = useState('home');
    // 1. Create state for the array of notes. Start with an empty array.
    const [notes, setNotes] = useState([]);

    // 2. Function to handle creating a new note
    const handleAddNewNote = (newNote) => {
        // Create a new note object with a unique id
        const noteToAdd = {
            id: Date.now(), // Simple way to get a unique id
            title: newNote.title,
            content: newNote.content
        };
        // Update the notes state by adding the new note to the existing array
        setNotes([...notes, noteToAdd]);
        // Switch back to the home view
        setCurrentView('home');
    };
    const handleDeleteNote = (idToDelete) => {
        const updatedNotes = notes.filter(note => note.id !== idToDelete);
        setNotes(updatedNotes);
    };

    return ( <
        div className = "App" > {
            currentView === 'home' ? (
                // 3. Pass the notes array and the function to change view to Home


                <
                Home notes = { notes }
                onNewNoteClick = {
                    () => setCurrentView('new-note')
                }
                onDeleteNote = { handleDeleteNote }
                />
            ) : (
                // 4. Pass the function to save a new note and to cancel to NewNote
                <
                NewNote onSaveNote = { handleAddNewNote }
                onCancelClick = {
                    () => setCurrentView('home')
                }
                />
            )
        } <
        /div>
    );
}

export default App;