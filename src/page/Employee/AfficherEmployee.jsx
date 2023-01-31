import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import("./AfficherEmployee.scss")
function AfficherEmployee() {
  const [employee , setEmployee ] = useState({
    matriculeEmp:``,
    nomEmp:``,
    prenomEmp:``,
    situationFamEmp:``,
    lieuNsEmp:``,
    civiliteEmp:``,
    adresseEmp:``,
    numTelEmp:``,
    dateNsEmp:``
});

  const {id} =useParams()
    useEffect(()=>{
      ViewEmployee();
    },[]);
    const ViewEmployee = async ()=>{
      const result = await axios.get(`http://localhost:8080/grh/Employee/find/${id}`) ;
      setEmployee(result.data);
     
    };
  return (

<div className="conprin">
  

<div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
Nom: {employee.nomEmp}
<br />
Prenom:{employee.prenomEmp}
<br />
Matricule : {employee.matriculeEmp}
<br />
situationFamEmp:{employee.situationFamEmp}
<br />
lieuNsEmp : {employee.lieuNsEmp}
<br />
civiliteEmp:{employee.civiliteEmp}
<br />
adresseEmp : {employee.adresseEmp}
<br />
numTelEmp:{employee.numTelEmp}
<br />
dateNsEmp : {employee.dateNsEmp}
</div>

<div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
Nom: {employee.nomEmp}
<br />
Prenom:{employee.prenomEmp}
<br />
Matricule : {employee.matriculeEmp}
<br />
situationFamEmp:{employee.situationFamEmp}
<br />
lieuNsEmp : {employee.lieuNsEmp}
<br />
civiliteEmp:{employee.civiliteEmp}
<br />
adresseEmp : {employee.adresseEmp}
<br />
numTelEmp:{employee.numTelEmp}
<br />
dateNsEmp : {employee.dateNsEmp}
</div>

</div>


  )
}

export default AfficherEmployee