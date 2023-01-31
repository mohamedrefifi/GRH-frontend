import"./Home.scss"
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from "../../component/navbar/Navbar"
import Employee from "../Employee/Employee"
import AjoutEmployee from "../Employee/AjoutEmployee"
import TableauDeBoard from "../TableauDeBoard/TableauDeBoard"
import AlertDialog from "../../component/AlertDialog"
import AfficherEmployee from "../Employee/AfficherEmployee"
import { Routes ,Route} from "react-router-dom"
import Stagaire from "../Stagaire/Stagaire"
import Apprenti from "../Apprenti/Apprenti"
import ListeCongee from "../GestionCongee/ListeCongee"
import DemandeCongee from "../GestionCongee/DemandeCongee"
import CongeeExceptionellle from "../GestionCongee/CongeeExceptionellle"
const Home = () => {
  return (
    <div className='Home'>
     
       <Sidebar/>
       <div className="homecontainer">
        <Navbar/>
       <Routes>
        
        <Route exact path="/employee" element = {  <Employee/>}/>
        <Route exact path="/ajoutemployee" element = {  <AjoutEmployee/>}/>
        <Route exact path="/TableauDeBoard" element = {  <TableauDeBoard/>}/>
        <Route exact path="/AlertDialog" element = {  <AlertDialog/>}/>
        <Route exact path="/AfficherEmployee/:id" element = {  <AfficherEmployee/>}/>
        <Route exact path="/Stagaire" element = {  <Stagaire/>}/>
        <Route exact path="/Apprenti" element = {  <Apprenti/>}/>
        <Route exact path="/ListeCongee" element = {  <ListeCongee/>}/>
        <Route exact path="/DemandeCongee" element = {  <DemandeCongee/>}/>
        <Route exact path="/CongeeExceptionellle" element = {  <CongeeExceptionellle/>}/>
       </Routes>
        </div>
    
    </div>
  )
}

export default Home
