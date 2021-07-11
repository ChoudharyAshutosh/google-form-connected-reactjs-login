import React from 'react'
import Form from './Form'
import Label from './Label'
import './FormModal.css'
export default function FormModal({phone, setPhone, selectedTime, closeForm, selectTime}){
    const stop=(e)=>{
        e.stopPropagation()
    }
    return (
        <div className="modal-container">
            <div className="modal-form-container" onClick={stop}>
                <Label/>
                <Form phone={phone} setPhone={setPhone} selectedTime={selectedTime} closeForm={closeForm} selectTime={selectTime}/>
            </div>
        </div>
    )
}