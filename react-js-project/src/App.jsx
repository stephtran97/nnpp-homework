import React from 'react';

import BigCoin from './BigCoin';

function App() {
  const [coins, setCoins] = React.useState(0);
  const addCoinsHandler = (coin) => {
    setCoins(coin);
  };
  return (
    <div className='wrapper'>
      <main>
        <BigCoin onCoinHandler={addCoinsHandler} />
      </main>
      <footer>
        Your coin balance:
        <strong>{coins}</strong>
      </footer>
    </div>
  );
}

export default App;
