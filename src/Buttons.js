import IconButton from '@mui/material/IconButton';

import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';


import './Buttons.css';

function Buttons({swipe, goBack}) {
  return (
    <div className="buttons">
      <IconButton className="no-button" onClick={() => swipe('left')}>
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="undo-button" onClick={() => goBack()}>
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="yes-button" onClick={() => swipe('right')}>
        <FavoriteIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Buttons;
