import { useState } from 'react';

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
  const [revealThreeHighestBids, setRevealThreeHighestBids] = useState(false);

  const images = [img0, img1, img2, img3, img4, img5, img6];
  const bids = [];
  const messages = [
    'My daughter alwas wanted this',
    'This would look great in my living room',
    "I've been looking for one of these for 12 years!",
    "This is the last one, I'm so lucky I found it!",
    'How would you like to see this...go away?',
    'Can you give me a discount?',
    "I'm not sure if I can afford that, can you lower the price?",
  ];

  for (let i = 0; i < 7; i++) {
    const bid = {
      id: `bid-${i}`,
      img: images[i],
      amount: Math.floor(Math.random() * 25) + 1,
      message: messages[i],
    };

    bids.push(bid);
  }
  console.log(bids);

  const highestBids = [...bids]
    .sort((a, b) => {
      return a.amount - b.amount;
    })
    .slice(-3);

  console.log(highestBids);

  const clickHandler = () => {
    setRevealThreeHighestBids(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Auction Day!</p>
        <p>Choose three bids</p>
        <p>You my sort them using this button</p>
        <button className="btn-sort" onClick={clickHandler}>
          Pick highest 3
        </button>
        <div className="container">
          {bids.map(bid => {
            return (
              <Card
                isSelected={
                  revealThreeHighestBids &&
                  !!highestBids.find(highestBid => highestBid.id === bid.id)
                }
                img={bid.img}
                amount={bid.amount}
                message={bid.message}
              ></Card>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
