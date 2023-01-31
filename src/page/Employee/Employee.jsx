import React from 'react';

import  { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import UpdateIcon from '@mui/icons-material/Update';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import AfficherEmployee from './AfficherEmployee';
import("./Employee.scss");

const Employee = () => {
  const [Employee , setEmployee ] = useState([]);
const {id} =useParams()
  useEffect(()=>{
loadEmployee();
  },[]);
  const loadEmployee = async ()=>{
    const result = await axios.get("http://localhost:8080/grh/Employee/find/all") ;
    setEmployee(result.data);
  };
  const deleteemployee = async (id)=>{
    await axios.delete(`http://localhost:8080/grh/Employee/delete/${id}`) ;
    loadEmployee()
  };
  return (
    <div>
      <div className="container">
         <div className="items">
           <div className="item">
          
          Ajouter
          
           
           <AddIcon className="icons" />
           </div>
           <div className="item">
             Supprimer
            <PersonRemoveIcon className="icons"/>
           </div>
          <div className="item"> 
          <Link to="/AfficherEmployee">
          Afficher
          </Link>
          <UpdateIcon className="icons"/>
          </div>
         </div>
      
       <table className="table">
  <thead>
    <tr>
      <th scope="col"> </th>
      <th scope="col">Nom</th>
      <th scope="col">Prenom</th>
      <th scope="col">Date Naissance</th>
      <th scope="col">Matricule</th>
      <th scope="col">civilite</th>
      <th scope="col">lieu Naissance</th>
      <th scope="col">adresse</th>
      <th scope="col">Num Tel </th>
      <th scope="col">Action </th>
    </tr>
  </thead>
  <tbody>
 { Employee.map((employe,index)=>(
 <tr className="trcolone">
      <th scope="row" key={index}> <input type="checkbox" /></th>
      <td>{employe.nomEmp}</td>
      <td>{employe.prenomEmp}</td>
      <td>{employe.dateNsEmp}</td>
      <td>{employe.matriculeEmp}</td>
      <td>{employe.civiliteEmp}</td>
      <td>{employe.lieuNsEmp}</td>
      <td>{employe.adresseEmp}</td>
      <td>{employe.numTelEmp}</td>
      <td>
        <div>
          <Link to="/AjoutEmployee">
          <PersonAddIcon />
          </Link>
          <button onClick={()=>deleteemployee(employe.id)}>
          <PersonRemoveIcon />
          </button>
          <Link to={`/AfficherEmployee/${employe.id}`}>
          <UpdateIcon  />
          </Link>
        </div>
      </td>
    </tr>

 )) }
 

   
     
  </tbody>
</table>
       </div>
    
    </div>
  )
}

export default Employee