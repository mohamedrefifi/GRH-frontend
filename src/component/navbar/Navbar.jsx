import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import("./Navbar.scss")

const Navbar = () => {
  return (
    <div className='Navbar'>
    
    <div className="wrapper">
      <div className="search">
        <input type="text" placeholder="chercher ..." />
        <SearchIcon />
      </div>
      <div className="items">
        <div className="item">
          <MessageIcon/>
        </div>
        <div className="item">
          <CircleNotificationsIcon/>
        </div>
        <div className="item">
          <AccountBoxIcon/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
