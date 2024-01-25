import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Component/Register.jsx';
import { myContext } from './Context.js';
import { useState } from 'react';
import Login from './Component/Login.jsx';


function App() {


  const [user,setUser]=useState([])




const values={user,setUser}
  return (
    <MDBContainer fluid>
      <div>
        <BrowserRouter>
  <myContext.Provider value={values}>
    <Routes>
       <Route path='/' element={<Login />}/>
       <Route path='/register' element={<Register />}/>
     
    </Routes>
    </myContext.Provider>
   </BrowserRouter>
    </div>
    </MDBContainer>
  );
}


export default App;


