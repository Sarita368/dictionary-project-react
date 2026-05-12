import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "3dfefaofbc33edd4c68fae7t3005c4aa";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "4zzu2BAAtZGZb1WSYpd8CgXrG0gfvQB5C4RZMjPSggtrHlcHqX7ELLcm";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: pexelsApiKey };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value.toLowerCase());
  }

  return (
    <div className="Dictionary">
      <section>
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          className="form-control"
          placeholder="Search for a word..."
          value={keyword}
          onChange={handleKeywordChange}
        />
      </form>
    </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
