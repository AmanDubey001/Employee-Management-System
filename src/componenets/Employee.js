import React, { useContext, useEffect,useState } from 'react'
import { EmployeeContext } from '../context/EmployeeContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditForm from './EditForm';

function Employee({props}) {
const {deleteData} = useContext(EmployeeContext);
const [show,setShow]=useState(false);

const handleClose = () =>{
    setShow(false);
}

useEffect(()=>{
handleClose()
},[props])
   
   
  return (
   <>
   <td style={{marginRight:"0px"}}><img src={props.Url} style={{width:"40px",height:'40px',margin:"10px",borderRadius:"60%"}}></img>{props.F_Name} {props.L_Name}</td>
   <td >{props.Status==true? (<p style={{padding:"5px",borderRadius:"22px",backgroundColor:"green",color:"white",textAlign:'center'}}>Active</p>):(<p style={{padding:"5px",borderRadius:"22px",backgroundColor:"red",color:"white",textAlign:'center'}}>Inactive</p>)}</td>
   <td >{props.Role}</td>
   <td  ><p>{props.Login}</p>
   {props.Time}
   </td>

	<td style={{marginRight:"20px"}}>
	<button onClick={()=> setShow(true)} className='btn text-warning btn-act' data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
	<button onClick={() => deleteData(props.id)} className='btn text-danger btn-act' data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
	</td>
    <Modal show={show} onHide={handleClose}>
     <Modal.Header closeButton>
      <Modal.Title>
        Edit Employee
      </Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <EditForm theProps={props}/>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={()=> setShow(false)}>Close Button</Button>
     </Modal.Footer>
    </Modal>						
   </>
  )
}

export default Employee
