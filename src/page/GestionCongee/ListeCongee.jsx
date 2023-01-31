import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavbarCongee from './NavbarCongee'
import("./ListeCongee.scss")


function ListeCongee() {
  const [Congee,setcongee] =useState([]);
  const [nomEmp,setnomEmp]=useState('');
  const [prenomEmp,setprenomEmp]=useState('')
useEffect(()=>{
  loadCongee();

    },[]);
    const lodEmploye =async (id)=>{
      const res = await axios.get(`http://localhost:8080/grh/Employee/find/${id}`)
      setnomEmp(res.data.nomEmp)
      setprenomEmp(res.data.prenomEmp)
      console.log(res)
    }
const loadCongee =async()=>{

  const res= await axios.get("http://localhost:8080/grh/congeannuel/find/all")
  setcongee(res.data)
}
  return (
    <div>
     <NavbarCongee />   
     <div>
    
     <table className="table">
  <thead>
    <tr>
      <th scope="col"> </th>
      <th scope="col">Nom</th>
      <th scope="col">Prenom</th>
      <th scope="col">date Debut Congee</th>
      <th scope="col">date Fin Congee</th>
      <th scope="col">Date Retour </th>
      <th scope="col">Duree </th>
    </tr>
  </thead>
  <tbody>
 { Congee.map((congee,index)=>(
   
 <tr className="trcolone" >
      <th scope="row" key={index}> 
      <input type="checkbox" /></th>
      <td ></td>
       <td>{congee.idemployee}</td>
      <td>{congee.dateDebCong}</td>
      <td>{congee.dateFinCong}</td>
      <td>{congee.dateRepCong}</td>
      <td>{congee.dureeCong}</td>
  </tr>
 


 )) }
 

   
     
  </tbody>
</table>

     </div>

   </div>
  )
}

export default ListeCongee