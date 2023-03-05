import React from 'react'
import FormCss from './Form.module.css';

const Form = () => {
  return (
    <form className={FormCss.Form}>
        <h1 className={FormCss.h1}>Add user details</h1>
        <label htmlFor="name" className={FormCss.label}>
            Name
        </label>
        <input type="text" id="name" placeholder='Enter your Name' className={FormCss.input}/>
        <label htmlFor="email" className={FormCss.label}>
            Email
        </label>
        <input type="email" id="email" placeholder='Enter your Email' className={FormCss.input}/>
        <label htmlFor="Street" className={FormCss.label}>
            Street
        </label>
        <input type="text" id="Street" placeholder='Enter Street' className={FormCss.input}/>
        <label htmlFor="City" className={FormCss.label}>
            City
        </label>
        <input type="text" id="City" placeholder='Enter City' className={FormCss.input}/>
        <label htmlFor="State" className={FormCss.label}>
            State
        </label>
        <input type="text" id="State" placeholder='Enter State' className={FormCss.input}/>
        <label htmlFor="pin" className={FormCss.label}>
            Pincode
        </label>
        <input type="text" id="pin" placeholder='Enter Pincode' className={FormCss.input}/>
        <label htmlFor="phone" className={FormCss.label}>
            Phone Number
        </label>
        <input type="text" id="phone" placeholder='Enter Phone number' className={FormCss.input}/>
        <input type="submit" value="Submit" className={FormCss.submitBtn}/>
    </form>
  )
}

export default Form