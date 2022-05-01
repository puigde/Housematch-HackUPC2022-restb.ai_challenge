import PersonIcon from '@mui/icons-material/Person';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';

import IconButton from '@mui/material/IconButton';

import './Header.css';

import Logo from './logo.png';

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header-icon" fontSize="large"/>
      </IconButton>

      <img src={Logo}
        alt=""
        className="header-logo" />

      <IconButton>
        <MapsHomeWorkIcon className="header-icon" fontSize="large"/>
      </IconButton>
    </div>
  );
}

export default Header;
