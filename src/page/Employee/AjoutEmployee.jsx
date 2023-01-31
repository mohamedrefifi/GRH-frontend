
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import("./AjoutEmployee.scss")
const AjoutEmployee=()=> {
 const [matriculeEmp,SetMatricule]=useState('')
 const [nomEmp,SetNom]=useState('')
 const [prenomEmp,SetPrenom]=useState('')
 const [situationFamEmp,Setsituation]=useState('')
 const [lieuNsEmp,SetLieu]=useState('')
 const [civiliteEmp,SetCivilite]=useState('')
 const [adresseEmp,SetAddress]=useState('')
 const [numTelEmp,SetTelephone]=useState('')
 const [dateNsEmp,SetDate]=useState('')
 let navigate = useNavigate();
 
 const saveEmploye =(e) =>{
 const Employe = {matriculeEmp,nomEmp,prenomEmp,situationFamEmp,lieuNsEmp,civiliteEmp,adresseEmp,numTelEmp,dateNsEmp};
 const result = axios.post("http://localhost:8080/grh/Employee/save",Employe).then((Response)=>{
 navigate=("/employee") 

 }).catch(error =>{
  console.log(error)
})
 };
 
 
 
  return (
    <div className="container">
      <form className="row g-3" onSubmit={(e)=>saveEmploye(e)}>
  <div className="col-md-6">
    <label  className="form-label">Matricule</label>
    <input type="text" className="form-control" 
    value={matriculeEmp} onChange={e=>SetMatricule(e.target.value)}
    />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Nom</label>
    <input type="text" className="form-control" 
    value={nomEmp} onChange={e=>SetNom(e.target.value)}
    />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Prenom</label>
    <input type="text" className="form-control" 
    value={prenomEmp} onChange={e=>SetPrenom(e.target.value)}
    />
  </div>
  <div className="col-md-6">
    <label  className="form-label">situation Familiale </label>
    <input type="text" className="form-control" 
     value={situationFamEmp} onChange={e=>Setsituation(e.target.value)}
    />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Lieu DE Naissance</label>
    <input type="text" className="form-control" 
      value={lieuNsEmp} onChange={e=>SetLieu(e.target.value)}
    />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Civilite</label>
    <input type="text" className="form-control" 
      value={civiliteEmp} onChange={e=>SetCivilite(e.target.value)}
    />
  </div>
  <div className="col-12">
    <label  className="form-label">Address</label>
    <input type="text" className="form-control"  placeholder="1234 Main St"
      value={adresseEmp} onChange={e=>SetAddress(e.target.value)}
    />
  </div>
  <div className="col-12">
    <label  className="form-label"> Date De naissance</label>
    <input type="text" className="form-control"  placeholder="Apartment, studio, or floor"
      value={dateNsEmp} onChange={e=>SetDate(e.target.value)}
    />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Numero Telephone</label>
    <input type="text" className="form-control" 
       value={numTelEmp} onChange={e=>SetTelephone(e.target.value)}
    />
  </div>
  
 

  <div className="col-12">
    <button type="submit" className="btn btn-primary" > Ajouter </button>
    <Link to="/employee" className="btn btn-secondary"> Anuler </Link>
  </div>
</form>
    </div>
  )
  }

export default AjoutEmployee