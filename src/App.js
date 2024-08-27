import React, { useState, useEffect } from "react";
import "./App.css";

const RandomQuoteMachine = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div id="quote-box">
      <div id="text">"{quote}"</div>
      <div id="author">- {author}</div>
      <button id="new-quote" onClick={handleNewQuote}>
        Nueva cita
      </button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweetear cita
      </a>
    </div>
  );
};

export default RandomQuoteMachine;
