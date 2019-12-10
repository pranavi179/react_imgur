import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCard from './component/imagecard.js';
import navbar from './component/navbar.js';

function App() {
  return (
      <div classname="App" >
    <navbarr/>
      <tr>
      <ImageCard title="meme" src="https://i.imgur.com/RGeQ2He.png"  upvotes="2" comments="3" views ="6"/>
      <td>
      <ImageCard title="Nature"  src="https://picsum.photos/200" upvotes="3" comments="2" views ="10"   />
      </td>
      </tr>

      </div>
  );
}

export default App;
