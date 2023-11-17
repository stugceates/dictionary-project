import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <p>{props.phonetic}</p>
      </div>
    );
  } else {
    return null;
  }
}
