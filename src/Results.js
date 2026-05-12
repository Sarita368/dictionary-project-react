import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    let displayedParts = [];

    return (
      <div className="Results">
        <section>
          <h2 className="text-capitalize">{props.results.word}</h2>
          <Phonetic phonetic={props.results.phonetic} />
        </section>

        {props.results.meanings.map(function (meaning, index) {
          if (!displayedParts.includes(meaning.partOfSpeech)) {
            displayedParts.push(meaning.partOfSpeech);
            
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          }
          return null;
        })}
      </div>
    );
  } else {
    return null;
  }
}