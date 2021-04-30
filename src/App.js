import "./App.css";
import scores from "./scores";
import HighScoreTable from "./HighScoreTable";
import WorldwideScores from "./WorldwideScores";

function App() {
  return (
    <div>
      <header>High Scores per Country</header>
      <WorldwideScores scores={scores} />
      <HighScoreTable scores={scores} />
    </div>
  );
}

export default App;
