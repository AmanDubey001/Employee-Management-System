import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { EmployeeContext } from '../context/EmployeeContext';
import { useContext } from 'react';

function EditForm({theProps}) {
  
    const {editData} = useContext(EmployeeContext) ; 
  
  const [Url,setUrl]=useState(theProps.Url);
  const [F_Name,setF_Name]=useState(theProps.F_Name);
  const [L_Name,setL_Name]=useState(theProps.L_Name);
  const [Status,setStatus]=useState(theProps.Status);
  const [Role,setRole]=useState(theProps.Role);
  const [Login,setLogin]=useState(theProps.Login);
  const [Time,setTime]=useState(theProps.Time);
  const [id,setId]=useState(theProps.id);

  const updatedData = {Url,F_Name,L_Name,Status,Role,Login,Time,id};


  const handleSubmit = (e) => {
   e.preventDefault();
   //setStatus((Status == true)? true:false);
   editData(id,updatedData);
  }


  return (
    <Form onSubmit={handleSubmit} >
        <Form.Group>
            <Form.Control
            type="text"
            name="Url"
            value={Url}
            onChange={ e => setUrl(e.target.value)}
            placeholder="Profile Picture URL"
            required
            />
        </Form.Group>

        <Form.Group>
            <Form.Control
            type="text"
            name="F_Name"
            value={F_Name}
            onChange={ e => setF_Name(e.target.value)}
            placeholder="First Name"
            required
            />
        </Form.Group>

        <Form.Group>
            <Form.Control
            type="text"
            name="L_Name"
            value={L_Name}
            onChange={ e => setL_Name(e.target.value)}
            placeholder="Last Name"
            required
            />
        </Form.Group>

        <Form.Group>
            <Form.Control
            type="text"
            name="Status"
            value={Status}
            onChange={ e => setStatus(e.target.value)}
            placeholder="Inactive:false || Active:true"
            required
            />
        </Form.Group>
       
       
        <Form.Group>
            <Form.Control
            type="text"
            name="Role"
            value={Role}
            onChange={ e => setRole(e.target.value)}
            placeholder="Designation"
            required
            />
        </Form.Group>

        <Button variant="success" type="submit">
          Edit employee
        </Button>
    </Form>
  )
}

export default EditForm
