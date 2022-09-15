import React, { useState } from "react";
import "./Quotes.css";
import QuoteItems from "../components/QuoteItems";
import { QUOTES } from "./QuoteLists";

import PopUp from "./PopUp";
const Quotes = ({ quotes }) => {
  return (
    <div className="quotes">
      {/* Estas quotes son las que vienen del form */}
      {quotes.map((quote, index) => (
        <QuoteItems key={index}
          content={quote.content}
          author={quote.author}
          upvotesCount={quote.upvotesCount}
          downvotesCount={quote.downvotesCount}
        />
        // treba da se prikaze vrednosta od pop up t.e vrednostite od input poleto
        //znaci treba da se kreira ista forma kako vo QuoteItems i ovie propsovi od PopUp od inout poleto da se prikazat vo formata
      ))}
      {QUOTES.map((quote, index) => (
        <QuoteItems key={index}
          content={quote.content}
          author={quote.author}
          upvotesCount={quote.upvotesCount}
          downvotesCount={quote.downvotesCount}
        />
        // treba da se prikaze vrednosta od pop up t.e vrednostite od input poleto
        //znaci treba da se kreira ista forma kako vo QuoteItems i ovie propsovi od PopUp od inout poleto da se prikazat vo formata
      ))}
    </div>
  );
};

export default Quotes;
