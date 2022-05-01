import {useEffect, useState} from 'react';
import './List.css';

import Grid from '@mui/material/Grid';

function List({serverUrl}) {
  const [ordering, setOrdering] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(serverUrl + '/ordering');
      const data = await res.json();
      console.log(data);
      setOrdering(data);
    };
    getData();
    setLoading(false);
  }, [serverUrl]);

  const imgList = ordering.map((img, index) => (
    <Grid item xs={6} key={index}>
      <a href={img.url}>
        <img src={img.src} className="list-img" alt="" />
      </a>
    </Grid>
  ));
  console.log(imgList);

  return loading ? <>Retraining the model...</> : (
    <Grid container>
      {imgList}
    </Grid>
  );
}

export default List;
