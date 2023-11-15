import React from "react";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <h4>{props.results.word}</h4>
        {props.results.meanings.map(function (meaning, index) {
          return meaning.definition;
        })}
      </div>
    );
  } else {
    return null;
  }
}
