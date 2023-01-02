import './App.css';
import EmployeeList from './componenets/EmployeeList';
import 'bootstrap/dist/css/bootstrap.min.css';
import  EmployeeContextProvider  from './context/EmployeeContext';

function App() {
  return (
    <div className="container-xl">
	    <div className="table-responsive">
		     <div className="table-wrapper">
         <EmployeeContextProvider>
          <EmployeeList/>
         </EmployeeContextProvider> 
         </div>
       </div>
    </div>
  );
}

export default App;
