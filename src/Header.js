import PersonIcon from '@mui/icons-material/Person';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';

import IconButton from '@mui/material/IconButton';

import './Header.css';

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header-icon" fontSize="large"/>
      </IconButton>

      <img src="https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png"
        alt=""
        className="header-logo" />

      <IconButton>
        <MapsHomeWorkIcon className="header-icon" fontSize="large"/>
      </IconButton>
    </div>
  );
}

export default Header;
