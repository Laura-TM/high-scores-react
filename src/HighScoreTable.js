import React, { useState } from "react";
import PlayerScore from "./PlayerScore";
import SortButton from "./SortButton";
import "./HighScoreTable.css";

function HighScoreTable(props) {
  let finalScores = props.scores.sort((a, b) => (a.name > b.name ? 1 : -1));

  const [currentOrder, setOrder] = useState(true);

  function changeOrder() {
    setOrder(!currentOrder);
  }

  return (
    <main className="container">
      <SortButton changeOrder={changeOrder} />
      {finalScores.map((score, index) => (
        <div key={index}>
          <h4 className="heading bg-info">HIGH SCORES: {score.name}</h4>
          <PlayerScore players={score.scores} isDescending={currentOrder} />
        </div>
      ))}
    </main>
  );
}

export default HighScoreTable;
