import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { EmployeeContext } from '../context/EmployeeContext';
import { useContext } from 'react';

function AddForm() {
  const {addData} = useContext(EmployeeContext) ; 
  const [newData,setNewData]=useState({
    Url:"profil.png",F_Name:"",L_Name:"",Status:"" ,Role:"",Login:"",Time:""
  });

  const onInputChange = (e) =>{
      setNewData({...newData,[e.target.name]:e.target.value})
  }

  const {Url,F_Name,L_Name,Status,Role,Login,Time,id} = newData;
  const handleSubmit = (e) => {
    e.preventDefault();
    let res=(Status[0]==='Inactive')?false:true;
    addData(Url,F_Name,L_Name,res,Role,Login,Time);
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control
            type="text"
            name="Url"
            value={Url}
            onChange = { (e) => onInputChange(e) }
            placeholder="Profile Picture URL"
            required
            />
        </Form.Group>

        <Form.Group>
            <Form.Control
            mt={2}
            type="text"
            name="F_Name"
            value={F_Name}
            onChange = { (e) => onInputChange(e) }
            placeholder="First Name"
            required
            />
        </Form.Group>

        <Form.Group>
            <Form.Control
            type="text"
            name="L_Name"
            value={L_Name}
            onChange = { (e) => onInputChange(e) }
            placeholder="Last Name"
            required
            />
        </Form.Group>

        <Form.Group>
            <Form.Control
            type="text"
            name="Status"
            value={Status}
            onChange = { (e) => onInputChange(e) }
            placeholder="Inactive || Active"
            required
            />
        </Form.Group>
       
       
        <Form.Group>
            <Form.Control
            type="text"
            name="Role"
            value={Role}
            onChange = { (e) => onInputChange(e) }
            placeholder="Designation"
            required
            />
        </Form.Group>

         <Form.Group>
           <Form.Control
            type="Date"
            name="Login"
            value={Login}
            onChange = { (e) => onInputChange(e) }
            placeholder="Date"
            required
            />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="Time"
            name="Time"
            value={Time}
            onChange = { (e) => onInputChange(e) }
            placeholder="Time"
            required
            />
        </Form.Group> 

        <Button variant="success" type="submit">
        Add new employee
        </Button>
    </Form>
  )
}

export default AddForm
