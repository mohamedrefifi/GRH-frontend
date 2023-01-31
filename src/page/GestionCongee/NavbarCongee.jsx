import React from 'react'
import { Link } from 'react-router-dom'
import("./NavbarCongee.scss")
function NavbarCongee() {
  return (
    <div>
        
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#"><Link to="/ListeCongee">Congee en cours </Link></a></li>
    <li className="breadcrumb-item"><a href="#"><Link to="/CongeeExceptionellle">Congee Exceptionelle</Link> </a></li>
    <li className="breadcrumb-item"><a href="#"><Link to="/DemandeCongee">Demande Congee</Link></a></li>
    <li className="breadcrumb-item"><a href="#">Demande Congee</a></li>
  </ol>
    </div>
  )
}

export default NavbarCongee