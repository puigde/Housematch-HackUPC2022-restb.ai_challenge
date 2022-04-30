import './Photos.css';

import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {useState} from 'react';

function Photos({name, imgs}) {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div className='card' style={{backgroundImage: `url(${imgs[imgIndex]})`, backgroundColor: 'black'}}>
      <div className='controls-container'>
        <IconButton onClick={() => setImgIndex(imgIndex - 1)}>
          <ChevronLeftIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={() => setImgIndex(imgIndex + 1)}>
          <ChevronRightIcon fontSize="large" />
        </IconButton>
      </div>
      <h2>{name}</h2>
      <div className='info-icon-container'>
        <IconButton className='info-icon'>
          <InfoOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Photos;
