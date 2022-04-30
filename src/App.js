import React from 'react';
import {useState, useRef, useMemo} from 'react';

import './App.css';

import Header from './Header.js';
import Cards from './Cards.js';
import Buttons from './Buttons.js';


function App() {
  const [db] = useState([
    {
      name: 'Pedralbes house',
      imgurl: 'https://img3.idealista.com/blur/WEB_DETAIL-XL-L/0/id.pro.es.image.master/17/5d/46/974096135.jpg',
    },
    {
      name: 'Calle d\'Europa, 15 flat',
      imgurl: 'https://img3.idealista.com/blur/WEB_DETAIL-XL-L/0/id.pro.es.image.master/2c/16/61/878498755.jpg',
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    [db.length],
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <>
      <Header />
      <Cards properties={db} childRefs={childRefs} swiped={swiped} outOfFrame={outOfFrame}/>
      <Buttons swipe={swipe} goBack={goBack} />
    </>
  );
}

export default App;
