import React from 'react';

import  { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import UpdateIcon from '@mui/icons-material/Update';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import("./Stagaire.scss");

const Stagaire = () => {
  const [Stagaire , setStagaire ] = useState([]);
const {id} =useParams()
  useEffect(()=>{
    loadStagaire();
  },[]);
  const loadStagaire = async ()=>{
    const result = await axios.get("http://localhost:8080/grh/Stagaire/find/all") ;
    setStagaire(result.data);
  };
  const deleteStagaire = async (id)=>{
    await axios.delete(`http://localhost:8080/grh/Stagaire/delete/${id}`) ;
    loadStagaire()
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
 { Stagaire.map((stagaire,index)=>(
 <tr className="trcolone">
      <th scope="row" key={index}> <input type="checkbox" /></th>
      <td>{stagaire.civiliteStag}</td>
      <td>{stagaire.nomStag}</td>
      <td>{stagaire.prenomStag}</td>
      <td>{stagaire.dateNsStag}</td>
      <td>{stagaire.lieuNsStag}</td>
      <td>{stagaire.adresseStag}</td>
      <td>{stagaire.dateDebStag}</td>
      <td>{stagaire.dateFinStag}</td>
      <td>
        <div>
          <Link to="/AjoutEmployee">
          <PersonAddIcon />
          </Link>
          <button onClick={()=>deleteStagaire(stagaire.id)}>
          <PersonRemoveIcon />
          </button>
          <Link to={`/AfficherEmployee/${stagaire.id}`}>
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

export default Stagaire