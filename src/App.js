// // import React, { Component } from 'react';
// // import './App.css';

// // import EmployeeList from './components/EmployeeList';

// // class App extends Component {
// //   render() {
// //     const { employees } = this.props;
// //     return (
// //       <div className="App">
// //         <EmployeeList employees={employees} />
// //       </div>
// //     );
// //   }
// // }

// // export default App;


import React from "react";
import TransactionTable from "./components/TransactionTable";


import "./App.css";

const title = 'HackerBank';

function App() {
  const txns = [
    {
      date: "2019-11-29",
      description: "HACKERBANK1 BP DES: MERCH PMT ID:1358570",
      type: 0,
      amount: 1520.34,
      balance: "$12,234.45"
    },
    {
      date: "2019-12-01",
      description: "THE HACKERUNIVERSITY DES: CCD+ ID:0000232343",
      type: 0,
      amount: 1000,
      balance: "$12,234.45"
    },
    {
      date: "2019-11-25",
      description: "HACKERBANK DES:DEBIT O ID: 0000987945787897987987",
      type: 1,
      amount: 2450.45,
      balance: "$12,234.45"
    },
    {
      date: "2019-11-29",
      description: "HACKERBANK INC. DES:CCD+ ID: 33375894749",
      type: 0,
      amount: 1985.4,
      balance: "$12,234.45"
    },
    {
      date: "2019-11-29",
      description: "HACKERBANK DES: DEBIT O ID:00097494729",
      type: "Debit",
      amount: 564,
      balance: "$12,234.45"
    },
    {
      date: "2019-11-29",
      description: "CREDIT CARD PAYMENT ID: 222349083",
      type: 1,
      amount: 1987,
      balance: "$12,234.45"
    }
  ];
  return (
    <div className="container-fluid">
      
      <TransactionTable txns={txns}></TransactionTable>
    </div>
  );
}

export default App;





// import React from "react";
// import Child from './Child'
  
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.ChildElement = React.createRef();
//   }
//   handleClick = () => {
//     const childelement = this.ChildElement.current;
//       alert("current state of child is :  "+ childelement.state.name);
//     childelement.changeName("Aakash");
      
      
//   };
//   render() {
//     return (
//       <div >
//         <Child ref={this.ChildElement} />
//         <button onClick={this.handleClick}>Show real name</button>
//       </div>
//     );
//   }
// }
// export default App