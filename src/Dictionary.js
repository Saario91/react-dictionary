import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from './Photos';

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded]   = useState(false);
  let [photos, setPhotos]   = useState(null);


  function handlePexelResponse(response){
      setPhotos(response.data.photos);
  }

  function search(){
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelAPIkey = '563492ad6f91700001000001390cc87fb5044b5d8fa55acf630a8a81';
    let pexelAPIurl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios.get(pexelAPIurl, {headers: {'Authorization': `Bearer ${pexelAPIkey}`},}).then(handlePexelResponse);
  }
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load(){
    setLoaded(true);
  }

  if(loaded){
    return (
      <div className="Dictionary">
        <section>
          <h1>What do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
        </form>
        <div className="hint">
          suggested words: sunset, wine, yoga, forest.
        </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  }
  else{
    load();
    search();
  }

}