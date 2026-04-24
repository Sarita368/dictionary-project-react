import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for the word: ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value.toLowerCase());
  }


  return (
    <div className="Dictionary">
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
    </div>
  );
}
