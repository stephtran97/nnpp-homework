import React from 'react';
import './BigCoin.css';

function BigCoin({ onCoinHandler }) {
  const [numOfCoins, setNumOfCoins] = React.useState(0);

  return (
    <div className='coin-wrapper'>
      <button
        className='coin'
        onClick={() => {
          setNumOfCoins(numOfCoins + 2);
          onCoinHandler(numOfCoins + 2);
        }}
      >
        <span className='visually-hidden'>Add 2 coins</span>
        <img
          className='coin-image'
          alt=''
          src='https://sandpack-bundler.vercel.app/img/toonie.png'
        />
      </button>
    </div>
  );
}

export default BigCoin;
