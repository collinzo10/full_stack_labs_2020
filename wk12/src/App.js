import React from 'react';
//import logo from './logo.svg';
import './App.css';
import UserList from './StudentList';
import AddStudent from './AddStudent';
import DeleteStudent from './DeleteStudent'

function App() {
  return (
    <React.StrictMode>
      <div>
        <AddStudent/>
      </div>

      <div id="list">
        <h1>List of Students</h1>
        <UserList/>
      </div>

      <div>
        <DeleteStudent/>
      </div>
      

    </React.StrictMode>
  );
}

export default App;
