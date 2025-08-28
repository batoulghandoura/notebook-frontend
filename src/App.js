import React, {Component} from 'react';
import './App.css';
import Home from './components/Home/Home';
{/* import NewNote from './components/NewNote/NewNote' */}

class App extends Component{

/* testing for cors 
componentDidMount() {
    // Quick test API call
    fetch('http://127.0.0.1:8000/api/notes')
      .then(res => res.json())
      .then(data => console.log('API response:', data))
      .catch(err => console.error('API error:', err));
  }
*/

  render() {
  return (
    <div className="App">
      <Home/>
    {/* <NewNote/> */}  
    </div>
    );
  }
}

export default App;
