import React from 'react';
import employees from './employee.json';
import ReactTable from "react-table";
import './App.css';



class App extends Component{
  constructor(props) {
    super (props);
  
    this.state = {
      employees: []
    }
  
  }
};


function emp() {
  

render = () => {


  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Title',
      selector: 'title',
      sortable: true,
      right: true,
    },
  ]
  return (
    <ReactTable>
    columns = {columns}
    data = {this.state.employees}
      
    </ReactTable>
  );
}
}

export default App;
