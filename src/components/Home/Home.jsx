import React from 'react'
import './Home.css'

export const Home = () => {
  return (
    <div class="container">
        <div class="header">
        <img src="/images/icons8-document.svg" class="note-icon" alt="none"/>
        <p>My Notes</p>
        </div>

        <p>Capture your thoughts ideas, and inspiration in beautiful, searchable notes</p>
      
      <div class="top">
        <div className='search'>
          <img src='./././images/icons8-search.svg' class="search-icon" alt="Search"/>
          <input type="text" placeholder="Search your notes..." id="searchInput"/>
        </div>
    
      <button class="btn" id="newNoteBtn">+ &nbsp;New Note</button>
      </div>
    
    <br/><br/>
    
     <div class="nonote" id="noNoteSection">
        <img src="../images/icons8-document.svg" class="nonote-icon" alt="No notes"/>
        <p class="message">No notes yet</p>
        <p class="subtitle">Create your first note to get started</p>
        <button class="input1">+ &nbsp; Create your first note</button>
    </div>
    
 {/*
 
    <div class="notes" id="notesList">
            <div class="note">
                <h3>Note Title</h3>
                <p>Note content goes here...</p>
              <div class="actions">
                  <button class="btn">Edit</button>
                  <button class="btn">Delete</button>
              </div>
            </div>
    </div>
    
 */}

    </div>
  )
}

export default Home;