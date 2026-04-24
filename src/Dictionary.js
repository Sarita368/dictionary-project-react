import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");


function handleResponse(response) {
    console.log(response.data);
}
  
    
   function search(event) {
    event.preventDefault();
    let apiKey = "3dfefaofbc33edd4c68fae7t3005c4aa";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
