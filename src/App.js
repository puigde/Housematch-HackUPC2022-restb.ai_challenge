import {useState} from 'react';

import Swipe from './Swipe.js';
import List from './List.js';
import Header from './Header.js';

const SERVER_URL = 'http://127.0.0.1:5000';

function App() {
  const [page, setPage] = useState('swipe');

  return (
    <>
      <Header serverUrl={SERVER_URL} page={page} setPage={setPage} />
      {page === 'swipe' ?
        <Swipe serverUrl={SERVER_URL} /> :
        <List serverUrl={SERVER_URL} />}
    </>
  );
}

export default App;
