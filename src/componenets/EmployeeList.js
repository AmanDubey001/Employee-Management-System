import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState ,useContext, useEffect} from 'react'
import AddForm from './AddForm'
import Employee from './Employee'
import { EmployeeContext } from '../context/EmployeeContext';
import Pagination from './Pagination';

function EmployeeList() {

const {sortData}=useContext(EmployeeContext)
const [show,setShow]=useState(false);
const handleShow = () =>{
}
const handleClose = () =>{
    setShow(false);
}

useEffect(()=>{

},[sortData]);

const [currentPage,setCurrentPage] = useState(1);
const [employeesPerPage]=useState(10);

const indexOfLastEmployee=currentPage * employeesPerPage;
const indexOfFirstEmployee=indexOfLastEmployee - employeesPerPage;
const currentEmployees= sortData.slice(indexOfFirstEmployee,indexOfLastEmployee);
const totalPagesNum = Math.ceil(sortData.length/employeesPerPage);


  return (
 <div>   
<div class="table-title">
    <div class="row">
        <div class="col-sm-6">
            <h2>Manage <b>Employees</b></h2>
        </div>
        <div class="col-sm-6">
<Button onClick={()=>setShow(true)
 } class="btn " variant='success' sortData-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>					
        </div>
    </div>
    </div>
    <table class="table table-striped table-hover">
    <thead>
        <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Role</th>
            <th>Last Login</th>
        </tr>
    </thead>
    <tbody>
    {

     currentEmployees.map((res,index)=>{
    return (<tr key={index}><Employee props={res}/></tr>)
   })

    }
    </tbody>
    </table>
    <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage}
    sortData={sortData}
    currentEmployees={currentEmployees}
    />

    <Modal show={show} onHide={handleClose}>
     <Modal.Header closeButton>
      <Modal.Title>
        Add Employee
      </Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <AddForm/>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={()=> setShow(false)}>Close Button</Button>
     </Modal.Footer>
    </Modal>


    </div>
  )
}

export default EmployeeList
