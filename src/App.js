import React from 'react';
import {useState, useRef, useMemo, useEffect} from 'react';

import './App.css';

import Header from './Header.js';
import Cards from './Cards.js';
import Buttons from './Buttons.js';


const SERVER_URL = 'http://127.0.0.1:5000';

function App() {
  const [db, setDb] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(currentIndex);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(SERVER_URL + '/list');
      const data = await res.json();
      console.log(data);
      setDb(data);
      setCurrentIndex(data.length - 1);
    };
    getData();
  }, []);

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

  const sendSwipe = async (swipe, index) => {
    console.log(swipe, index);
    await fetch(SERVER_URL + '/decision', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'swipe': swipe,
        'index': index,
      }),
    });
  };

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    // console.log(direction, nameToDelete, index);
    sendSwipe(direction, db.length - 1 - index);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
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
