import React,{useState} from 'react';
import Homepage from './component/Homepage';
import './App.css';

function App() {
  const [lists,setList]=useState([]);
  
  // const headers = {
  //   'api-key': 'Ad4ad639409238e113e1e420950e9ad48',
  //   'Content-Type': 'application/json'
  // }
  
  // const data = {
  //   to: "+918872006291",
  //   sender: '+919878517502',
  //   body: 'Hi , Please find the reservation for me-Sunny',
  //   type: 'OTP',
  //   template_id:"1107165959873165373"
  // }
  // const func=()=>{
  //   axios.post('https://api.in.kaleyra.io/v1/HXIN1740145135IN/messages', data, {
  //     headers: headers
  //   })
  //   .then((response) => {
  //     console.log(response) 
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }
  return (
    <div className="App">
      <div style={{fontSize:'50px'}}>TraVel CheckList</div>   
      <Homepage lists={lists} setList={(v)=>setList(v)}/>
    </div>
  );
}

export default App;
