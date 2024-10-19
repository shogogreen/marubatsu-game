import React from 'react';
import './App.css';
import Parts from "./Parts";

const App = () => {
  const [marubatsu, setMarubatsu] = React.useState({maru: [], batsu: []});
  const [isMaruPhase, setIsMaruPhase] = React.useState(true);
  const [isVictory, setIsVictory] = React.useState(null);

  const victorys = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                    [0, 3, 6], [1, 4, 7], [2, 5, 8],
                    [0, 4, 8], [2, 4, 6]];

  const maintain3maru = (state) => {
    if (marubatsu.maru.length === 3) {
      marubatsu.maru.shift();
      marubatsu.maru.push(state);
    } else {
      marubatsu.maru.push(state);
    }
  };

  const maintain3batsu = (state) => {
    if (marubatsu.batsu.length === 3) {
      marubatsu.batsu.shift();
      marubatsu.batsu.push(state);
    } else {
      marubatsu.batsu.push(state);
    }
  };

  const changeState = (state) => {
    const retryButton = document.querySelector('#retryButton');
    if (isMaruPhase === true) {
      maintain3maru(state);
    } else {
      maintain3batsu(state);
    }
    setMarubatsu({maru: marubatsu.maru, batsu: marubatsu.batsu});
    setIsMaruPhase(!isMaruPhase);
    victorys.forEach((victory) => {
      if (JSON.stringify(marubatsu.maru.concat().sort()) === JSON.stringify(victory)) {
        setIsVictory('maru');
        retryButton.style.display = 'inline-block';
        retryButton.addEventListener('click', () => {
          /* eslint-disable no-restricted-globals */
          location.reload();
          /* eslint-enable no-restricted-globals */
        });
        return;
      }
      if (JSON.stringify(marubatsu.batsu.concat().sort()) === JSON.stringify(victory)) {
        setIsVictory('batsu');
        retryButton.style.display = 'inline-block';
        retryButton.addEventListener('click', () => {
            /* eslint-disable no-restricted-globals */
            location.reload();
            /* eslint-enable no-restricted-globals */
        });
        return;
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>～4手消え○×ゲーム～</h1>
      </header>
      <div>
        <h2>{isVictory === 'maru' ? '〇の勝ち!': (isVictory === 'batsu' ? '×の勝ち!': (isMaruPhase === true ? '〇のターン': '×のターン'))}</h2>
        <button id='retryButton'>Retry</button>
      </div>
      <div>
        <Parts
          isMaruPhase={isMaruPhase}
          isVictory={isVictory}
          maru={marubatsu.maru}
          batsu={marubatsu.batsu}
          changeState={changeState}
        />
      </div>
    </div>
  );
}

export default App;
