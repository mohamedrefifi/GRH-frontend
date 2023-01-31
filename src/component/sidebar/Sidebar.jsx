import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import("./Sidebar.scss")

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className="top">
      <span className="logo"> G R H 

      </span>
      </div>
   
      <div className="center"> 
      <hr/>
       <ul>
        <p className="titel">Menu</p>
        <li>
        <GridViewSharpIcon className="icon"/>
            <span>
            <Link to='/TableauDeBoard'> 
        Tableau De Board
        </Link>
            </span>
        </li>
        <p className="titel">Listes</p>
        <li>
        <GroupSharpIcon className="icon"/>
          <span>
        <Link to='/employee'>   
         Employee
        </Link>
          </span>
        </li>
        <li>
        <GroupSharpIcon className="icon"/>
          <span>
          <Link to='/Stagaire'>
            Stagaire 
            </Link>
          </span>
        </li>
        <li>
        <GroupSharpIcon className="icon"/>
          <span>
          <Link to='/Apprenti'>
            Apprenti 
            </Link>
          </span>
        </li>
    
        <p className="titel">Service</p>
        <li>
        <GroupSharpIcon className="icon"/>
          <span>
        <Link to='/employee'>   
        Gestion de recrutement
        </Link>
          </span>
        </li>
        <li>
        <GroupSharpIcon className="icon"/>
          <span>
        <Link to='/employee'>   
        Gestion du personnel
        </Link>
          </span>
        </li>
        <li>
        <GroupSharpIcon className="icon"/>
          <span>
        <Link to='/ListeCongee'>   
        Gestion des congés
        </Link>
          </span>
        </li>
        <li>
        <GroupSharpIcon className="icon"/>
          <span>
        <Link to='/employee'>   
        Gestion du pointage
        </Link>
          </span>
        </li>
        <li>
        <GroupSharpIcon className="icon"/>
          <span>
        <Link to='/employee'>   
        Gestion des primes et des acomptes.
        </Link>
          </span>
        </li>
        <li>
        <GroupSharpIcon className="icon"/>
          <span>
        <Link to='/employee'>   
        Gestion de la paie
        </Link>
          </span>
        </li>
        
        <p className="titel">Utilisateur</p>
         <li>
         <AccountCircleIcon className="icon"/>
          <span>
     
            Profile 
          </span>
        </li>
        <li>
        <LogoutIcon className="icon"/>
          <span>
      
            Deconnexion  
          </span>
        </li>
      </ul>
      </div>
    
      <div className="bottom">
      <div className="coloroption"></div>
      <div className="coloroption"></div>
      </div>
    </div>
  )
}

export default Sidebar
