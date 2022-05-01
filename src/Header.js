import PersonIcon from '@mui/icons-material/Person';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import StyleIcon from '@mui/icons-material/Style';

import IconButton from '@mui/material/IconButton';

import './Header.css';

import Logo from './logo.png';

function Header({page, setPage}) {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header-icon" fontSize="large"/>
      </IconButton>

      <img src={Logo}
        alt=""
        className="header-logo" />

      <IconButton onClick={() => {
        if (page === 'swipe') {
          setPage('list');
        } else {
          setPage('swipe');
        }
      }}>
        {page === 'swipe' ?
          <MapsHomeWorkIcon className="header-icon" fontSize="large"/> :
          <StyleIcon className="header-icon" fontSize="large"/>}
      </IconButton>
    </div>
  );
}

export default Header;
