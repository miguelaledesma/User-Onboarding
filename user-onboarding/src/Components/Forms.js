import React from 'react'

const Forms = (props) => {
const { change, submit, errors } = props 

const {username, email, password, tos } = props.values 

const onChange = (evt) => {
    const { name, value, type, checked} = evt.target

    const valueToUse = type === 'checkbox' ? checked : value ; 
    change(name, valueToUse)

}

const onSubmit = evt => {
    evt.preventDefault()
    submit()
}


return (
    <div> 
    <h1> Create Account</h1>
    <div className='errors'>
          
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
        </div>


    
    <form onSubmit = {onSubmit}> 
        <label className = 'labelOne'> Name: 
            <input 
            name = 'username'
            type = 'text'
            value = {username}
            onChange = {onChange}
            
            /> 
        </label>
        <label className = 'labelTwo'> Email: 
            <input
            name ='email'
            type = 'text'
            value ={email}
            onChange = {onChange}
            
            /> 
        </label>
    <label className = 'labelThree'> Password: 

        <input 
        
        name = 'password'
        type = 'password'
        value = {password}
        onChange = {onChange}
        
        /> 

    </label>

    <label className = 'terms'> Terms of Service
        <input 
        type = 'checkbox'
        name = 'TOS'
        checked = {tos}
        onChange = {onChange}
        
        /> 

    </label>

    <input className='button' type = 'submit' value = 'Create Account' /> 

    </form>
    </div>
)
}

export default Forms 