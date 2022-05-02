import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  //console.log('Synonms logged below');
  //console.log(props.meaning.synonyms.length);

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if(definition.example){
        return (
          <div key={index}>
            <div>
              <strong>Definition:</strong> {definition.definition}
              <br />
              <em><strong>Example:</strong> {definition.example}</em>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );}
        else{
          return (
            <div key={index}>
              <div>
                <strong>Definition:</strong> {definition.definition}
                <br />
                <Synonyms synonyms={definition.synonyms} />
              </div>
            </div>
          )
        }
      })}
    </div>
  );
}