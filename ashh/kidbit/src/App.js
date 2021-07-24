import React, {useState, useEffect} from 'react'
import './App.css';
import FormModal from './component/FormModal'
import axios from 'axios';
function App() {
  useEffect(()=>{
    axios.get("https://cors-anywhere.herokuapp.com/corsdemo")
    .then((response)=>{})
    .catch((error)=>{})
  },[])
  const [phone,setPhone]=useState('')
  const [selectedTime,setSelectedTime]=useState(-1)
  const openForm=(e)=>{
    document.getElementById('open-button-container').className="hide";
    document.getElementById('modal').className="";
    document.getElementsByTagName('body')[0].style.backgroundColor="rgba(211,211,211,1)";
    e.stopPropagation()
  }
  const selectTime=(index)=>{
    setSelectedTime(index)
    for(var i=1;i<5;i++){
         if(i===index){
            document.getElementById(`time-slot-${i}`).className="form-input time-selection-option time-selection-option-color";
        }
        else{
            document.getElementById(`time-slot-${i}`).className="form-input time-selection-option";  
        }
    }
  }
  const closeForm=()=>{
    document.getElementById('open-button-container').className="open-button-container";
    document.getElementById('modal').className="hide";
    document.getElementsByTagName('body')[0].style.backgroundColor="initial";
    document.getElementById('name').value='';
    document.getElementById('address').value='';
    document.getElementById('hear-location').value='';
    document.getElementById('other').value='';
    document.getElementById('other').style.display="none";
    setPhone('');
    selectTime(-1);
    document.getElementById('hear-location').style.color="lightslategrey";
  }
  return (
    <div className="App" onClick={closeForm}>
      <div id="modal" className="hide">
        <FormModal phone={phone} setPhone={setPhone} selectedTime={selectedTime} closeForm={closeForm} selectTime={selectTime}/>
      </div>
      <div id="open-button-container" className="open-button-container">
        <button id="open-container" onClick={openForm}>Open Form</button>
      </div>
    </div>
  );
}

export default App;
