import IconButton from '@mui/material/IconButton';

import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';


import './Buttons.css';

function Buttons() {
  return (
    <div className="buttons">
      <IconButton className="no-button">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="undo-button">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="yes-button">
        <FavoriteIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Buttons;
