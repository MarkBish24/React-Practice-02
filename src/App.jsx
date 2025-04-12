import Player from "./components/Player.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player inititalName="Player 1" symbol="X" />
          <Player inititalName="Player 2" symbol="O" />
        </ol>
      </div>
    </main>
  );
}

export default App;
