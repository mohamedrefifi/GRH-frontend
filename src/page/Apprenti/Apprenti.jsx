import React from 'react';

import  { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import UpdateIcon from '@mui/icons-material/Update';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import("./Apprenti.scss");

const Apprenti = () => {
  const [Apprenti , setApprenti ] = useState([]);
const {id} =useParams()
  useEffect(()=>{
loadApprenti();
  },[]);
  const loadApprenti = async ()=>{
    const result = await axios.get("http://localhost:8080/grh/apprenti/find/all") ;
    setApprenti(result.data);
  };
  const deleteApprenti = async (id)=>{
    await axios.delete(`http://localhost:8080/grh/apprenti/delete/${id}`) ;
    loadApprenti()
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
          <Link to="/AfficherApprenti">
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
 { Apprenti.map((employe,index)=>(
 <tr className="trcolone">
      <th scope="row" key={index}> <input type="checkbox" /></th>
      <td>{employe.civiliteApr}</td>
      <td>{employe.nomApr}</td>
      <td>{employe.prenomApr}</td>
      <td>{employe.dateNsApr}</td>
      <td>{employe.lieuNsApr}</td>
      <td>{employe.adresseApr}</td>
      <td>{employe.organismeExtApr}</td>
      <td>{employe.DateInstlApr}</td>
      <td>
        
      </td>
    </tr>

 )) }
 

   
     
  </tbody>
</table>
       </div>
    
    </div>
  )
}

export default Apprenti