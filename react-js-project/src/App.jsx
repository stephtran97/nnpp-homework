import React from 'react';

import BigCoin from './BigCoin';

function App() {
  const [numOfCoins, setNumOfCoins] = React.useState(0);
  const addCoinsHandler = () => {
    setNumOfCoins((prev) => prev + 2);
  };
  return (
    <div className='wrapper'>
      <main>
        <BigCoin onCoinHandler={addCoinsHandler} />
      </main>
      <footer>
        Your coin balance:
        <strong>{numOfCoins}</strong>
      </footer>
    </div>
  );
}

export default App;
