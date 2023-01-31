
import { getActiveElement } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavbarCongee from './NavbarCongee';
import("./DemandeCongee")


function DemandeCongee() {

  const [anneeCong,anneeCongset]=useState('');
  const [soldeCong,soldeCongset]=useState('');
  const [dureeCong,dureeCongset]=useState('');
  const [dateDebCong,dateDebCongset]=useState('');
  const [dateFinCong,dateFinCongset]=useState('');
  const [dateRepCong,dateRepCongset]=useState('');
  const [Employee,setEmployee]=useState([]);
  const [	idemployee ,setidemployee ]=useState('');
  const [nomEmp,setnomEmp]=useState('');
  const [matriculeEmp,setmatriculeEmp]=useState('');
  const [etat,setetat]=useState('');
  useEffect(()=>{
    loadEmployee();
    loadnomEmploye();
      },[]);
  const loadEmployee= async ()=>{
  const  result = await axios.get("http://localhost:8080/grh/Employee/find/all");
  setEmployee(result.data);
  }
  const loadnomEmploye = async (matriculeEmp)=>{
    const result = await axios.get(`http://localhost:8080/grh/Employee/find/mat/${matriculeEmp}`)
    setnomEmp(result.data.nomEmp)
    setidemployee(result.data.id)
    console.log(result.data.id)
    
  }

 
  const saveCongee =(e) =>{
  const dureeCong=dayjs(dateFinCong).diff(dayjs(dateDebCong),'day',true)
  const Congee={anneeCong,soldeCong,dureeCong,dateDebCong,dateFinCong,dateRepCong,idemployee};
  if(etat ==="Validee")
  {
  const result = axios.post("http://localhost:8080/grh/congeannuel/save",Congee);
    }
    else{
      console.log(etat)
    }
  }
  
  return (
    <div>
      <NavbarCongee />
   
    <div><form className="row g-3" onSubmit={(e)=>saveCongee(e)}>
    <div className="col-md-6">

     <label> Matricule Employee</label>   
       <select  className="form-select" id ="1"onChange={(e)=>{
        const res=e.target.value;
        setmatriculeEmp(res);
       }}>
     {Employee.map(employee=>(
        <option key={employee.id}>
          {employee.matriculeEmp}
          </option>
          
     ))}
      
        </select>
    </div>
    <div className="col-md-6">
      <label for="inputPassword4" className="form-label"></label>
      <input type="text" className="form-control"  onChange={loadnomEmploye(matriculeEmp)} placeholder= {nomEmp} />
      
    </div>
    <div className="col-12">
      <label for="inputAddress" className="form-label">Annee Congee</label>
      <input type="text" className="form-control"  placeholder="1234 Main St"
       value={anneeCong} onChange={e=>anneeCongset(e.target.value)}
      />
    </div>
    <div className="col-12">
    </div>
    <div className="col-md-6">
      <label for="inputCity" className="form-label">Date debut Congee</label>
      <input type="date" className="form-control" 
       value={dateDebCong} onChange={e=>dateDebCongset(e.target.value)}
      />
    </div>
    <div className="col-md-6">
      <label for="inputCity" className="form-label">Date Fin Congee</label>
      <input type="date" className="form-control" 
      value={dateFinCong} onChange={e=>dateFinCongset(e.target.value)}
      />
    </div>
    <div className="col-md-6">
      <label for="inputCity" className="form-label">Date Retour</label>
      <input type="date" className="form-control" 
      value={ dateRepCong} onChange={e=>dateRepCongset(e.target.value)}
      />
    </div>
    <div className="col-md-6">
      <label for="inputCity" className="form-label">Duree Congee </label>
      <input type="text" className="form-control" 
       value={dureeCong} onChange={e=>dureeCongset(e.target.value)}
      placeholder={dayjs(dateFinCong).diff(dayjs(dateDebCong),'day',true)}
      />
    
    </div>
    <div className="col-md-4 exp">
  <div className="">
    <select id="inputState" className="form-select"
   
    onChange={(e)=>setetat(e.target.value)}
    
    >
         <option>Decision</option>
        <option>Annulee</option>
        <option>Validee</option>
      </select>
      </div>
      </div>
    <div className="col-12">
      <button type="submit" className="btn btn-primary">Sign in</button>
    </div>
  </form></div> </div>
  )
}

export default DemandeCongee