import React from 'react';

export default function Phonetic(props) {
  function playAudio(event) {
    event.preventDefault();
    let utterance = new SpeechSynthesisUtterance(props.word);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="Phonetic">
      <button onClick={playAudio} style={{ cursor: "pointer", border: "none", background: "none", fontSize: "20px" }}>
        🔊
      </button>
      <span className="text">{props.phonetic}</span>
    </div>
  );
}