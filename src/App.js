import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Table from './Table.js';
import Form from './form.js';
import ImageCard from './component/imagecard';
import Navbar from './component/navbar';

// function App() {
//   return (
//     <div className="App"> //       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a 
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React 
//         </a>
//       </header>
//     </div>
//   );
// }

// bind the context
// class MyContainer extends Component {
//
//     constructor(props) {
//         super(props);
//         this.testVarible= "this is a test";
//     }
//
//     onMove = () => {
//         console.log(this.testVarible);
//     }
// }

// class App extends Component {

//   state = {
//      characters: [],
//   }

//   removeCharacter = index => {
//     const { characters } = this.state
//     this.setState({
//       characters: characters.filter((character, i ) => {
//         return i!== index
//       }),
//     })
//   }
//   handleSubmit = character => {
//     this.setState({ characters: [...this.state.characters, character]})
//   }
//   render() {
//     const { characters } = this.state
//       return (
//         // <div className = "App">
//         // <h1>pranavi</h1>
//         <div className="container">

//           < Table characterData= { characters } removeCharacter = { this.removeCharacter} />
//           <Form handleSubmit={this.handleSubmit} />
//           </div>

//       );
//     }
// }
// export default App;

// function App() {
//   return (
//     <div className="App">
    
//       <tr><p>jfjkvf</p></tr>
 class App extends Component {

  state = {
     characters: [],
  }

  removeCharacter = index => {
    const { characters } = this.state
    this.setState({
      characters: characters.filter((character, i ) => {
        return i!== index
      }),
    })
  }
  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character]})
  }
  render() {
    const { characters } = this.state
      return (
        <div className = "App">
        <Navbar />
        <tr>
       <ImageCard title="YOOOO"  src="https://i.imgur.com/RGeQ2He.png" upvotes="2" comments="3" views ="6"/>
      <td>
      <ImageCard title="YOweweweO"  src="https://picsum.photos/200" upvotes="3" comments="2" views ="10"   />
       </td>
       </tr>
       
             <div className="container">

                < Table characterData= { characters } removeCharacter = { this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
          </div>   
          </div >       
   );
  }
}
 
export default App; 