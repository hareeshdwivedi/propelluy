import logo from './logo.svg';
import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Card from './component/Card';
import Unmarked from './component/Unmarked';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Footer from './component/Footer';
import axios from 'axios';
import { Profile}  from './component/Profile';

function App() {
  const [portFolio,setPortfolio]=React.useState(150000)
  const [data,setdata]=useState([]);
  useEffect(()=>{
             axios.get("https://mocki.io/v1/61a36370-212d-4ac7-baf6-355a14262cb7").then((data)=>{
              setdata(data.data.portfolio)
             })
             

  },[])
  // i did state manage via props but i am also do same things via useContext 
  return (
    <div style={{position:"relative"}}>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Card  portFolio={portFolio} setPortfolio={setPortfolio} data={data}/>}></Route>
    <Route exact path='/unmarked' element={<Unmarked  portFolio={portFolio} setPortfolio={setPortfolio}/>}></Route>
    <Route exact path='/Profile' element={<Profile/>}></Route>
     </Routes>
     </BrowserRouter>
     </div>
    
  );
}

export default App;
