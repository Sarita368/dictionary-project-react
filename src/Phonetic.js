import React from 'react';
import "./Phonetic.css";

export default function Phonetic(props) {
  function playAudio(event) {
    event.preventDefault();
    let utterance = new SpeechSynthesisUtterance(props.word);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="Phonetic">
      <button onClick={playAudio} className="audio-button">
        🔊
      </button>
      <span className="text">{props.phonetic}</span>
    </div>
  );
}