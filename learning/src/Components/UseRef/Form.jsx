import React, { useState } from 'react';


const Form = () => {

    const [formData, setFormData] =useState({
        username:"",
        age:"",
        ops:false
    })

    function handleChange(event){

        setFormData({
            ...formData,
            [event.target.id] : event.target.value
        })

    }

  return (

    <div>
        {/*  */}
        <input onChange={handleChange} id="username" type="text" placeholder="Enter Username" />
        <input onChange={handleChange} id="age" type="number"placeholder="Enter age" />
        <button onclick={()=>handleChange}>save</button>
    </div>
  )
}

export default Form;