import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <div className="definition">{props.meaning.definition}</div>
        <div className="example">{props.meaning.example}</div>
        <div className="synonym">
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
