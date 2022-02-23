import React from 'react'

const Forms = (props) => {
const { change, submit } = props 

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
    <h1> My Form </h1>
    <form onSubmit = {onSubmit}> 
        <label> Name: 
            <input 
            name = 'username'
            type = 'text'
            value = {username}
            onChange = {onChange}
            
            /> 
        </label>
        <label> Email: 
            <input
            name ='email'
            type = 'text'
            value ={email}
            onChange = {onChange}
            
            /> 
        </label>
    <label> Password: 

        <input 
        
        name = 'password'
        type = 'password'
        value = {password}
        onChange = {onChange}
        
        /> 

    </label>

    <label> Terms of Service
        <input 
        type = 'checkbox'
        name = 'TOS'
        checked = {tos}
        onChange = {onChange}
        
        /> 

    </label>

    <input type = 'submit' value = 'Create a new User' /> 

    </form>
    </div>
)
}

export default Forms 