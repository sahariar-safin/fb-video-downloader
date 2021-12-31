import logo from './logo.svg';
import './App.css';
// import fbVideoDownloader from 'fb-video-downloader';
import { useEffect } from 'react';
const facebookGetLink = require('facebook-video-link');

function App() {

  // const video = () => fbVideoDownloader.getInfo("https://www.facebook.com/watch?v=1106669323403327")
  //   .then((info) => {
  //     console.log(info);
  //   })
  // useEffect(() => {
  //   video();
  // }, [])

  const url = 'https://www.facebook.com/EpochTimesTrending/videos/310155606660409';

  const videoInfo = (url) => {
    facebookGetLink(url).then(response => {
      console.log(response)
    });
  }

  useEffect(() => {
    videoInfo(url);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
