import React, {Component} from 'react';
import './App.css';
import Home from './components/Home/Home';
{/* import NewNote from './components/NewNote/NewNote' */}

class App extends Component{
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
