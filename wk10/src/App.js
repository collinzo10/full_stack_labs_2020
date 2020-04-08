import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Student from './components/student';
import College from './components/college';

class App extends React.Component {
  state = {  }
  render() { 
    return (  
      <>
         <div>   
            <Student name="Blue Bird" number="100" enrolled="2"/>
            <Student name="Kyrie Irving" number="2" enrolled="1"/>
            <Student name="Dwayne Wade" number="8" enrolled="3"/>
            <College name="PCSS " location="Buea"/>
        </div>
      </>
    )
  }
}

export default App;
