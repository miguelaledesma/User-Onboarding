import React, { useState } from 'react';
import * as yup from 'yup'
import schema from './validation/formSchema'
import './App.css';
import Forms from './Components/Forms';
import axios from 'axios'; 

const initialFormValues = {
  username: '', 
  password: '',
  email: '',
  checked: false

}

const initialFormErrors = {
  username: '', 
  password: '',
  email: '',
  checked: false

}




function App() {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [users, setUsers] = useState([])


  const inputSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
    .then(response =>{
      setUsers([response.data, ...users])
    })
    .catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const validate = ( name, value ) => {
      yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}) )
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }


  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues, [name]: value
    })
  }


  return (
    <div className="App">
      <Forms 
      values = {formValues}
      change = {inputChange}
      errors = {formErrors}
      submit = {inputSubmit}

      /> 
      {users.map((user) => {
        return (
          <div key={user.id} >
            <p>{user.email} </p>  
           </div>
        )
      })}

    </div>
  );
}

export default App;
