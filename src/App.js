import { useState, useEffect } from 'react';

import './App.css';
import Card from './components/Card';
import img0 from './img/img-0.jpg';
import img1 from './img/img-1.jpg';
import img2 from './img/img-2.jpg';
import img3 from './img/img-3.jpg';
import img4 from './img/img-4.jpg';
import img5 from './img/img-5.jpg';
import img6 from './img/img-6.jpg';

function App() {
  const [bids, setBids] = useState([]);
  const [revealThreeHighestBids, setRevealThreeHighestBids] = useState(false);

  const reset = () => {
    setData();
    setRevealThreeHighestBids(false);
  };

  const setData = () => {
    const images = [img0, img1, img2, img3, img4, img5, img6];
    const bidsArray = [];
    const messages = [
      'My daughter always wanted this...',
      'This would look great in my living room!',
      'Been looking for one of these for 12 years!',
      "This is the last one, I'm so lucky I found it!",
      'How would you like to see this...go away?',
      'Can you give me a discount?',
      "I'm not sure...can you lower the price?",
    ];

    for (let i = 0; i < 7; i++) {
      const bid = {
        id: `bid-${i}`,
        img: images[i],
        alt: 'Image of customer who has placed a bid',
        amount: Math.floor(Math.random() * 25) + 1,
        message: messages[i],
      };

      bidsArray.push(bid);
    }
    setBids(bidsArray);
  };

  useEffect(() => {
    setData();
  }, []);

  const highestBids = [...bids]
    .sort((a, b) => {
      return a.amount - b.amount;
    })
    .slice(-3);

  const clickHandler = e => {
    e.preventDefault();
    setRevealThreeHighestBids(true);
  };

  const displayedBids = revealThreeHighestBids ? highestBids : bids;

  return (
    <div className="App">
      <header className="App-header">
        <h2>Auction Day!</h2>
      </header>
      <main>
        <h3>Time to sell to the higest bidder...</h3>
        <div className="btn-container">
          <button onClick={clickHandler}>Pick highest 3</button>
          <button onClick={reset}>Reset</button>
        </div>
        <div className="container">
          {displayedBids.map(bid => {
            return (
              <Card
                isSelected={
                  revealThreeHighestBids &&
                  !!highestBids.find(highestBid => highestBid.id === bid.id)
                }
                key={bid.message}
                img={bid.img}
                alt={bid.alt}
                amount={bid.amount}
                message={bid.message}
              ></Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
