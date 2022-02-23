import React, { useState } from 'react';

import './App.css';
import Forms from './Components/Forms';

const initialFormValues = {
  username: '', 
  password: '',
  email: '',
  checked: false

}


function App() {

  const [formValues, setFormValues] = useState(initialFormValues)

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues, [name]: value
    })
  }


  return (
    <div className="App">
      <Forms 
      values = {formValues}
      change = {inputChange}


      /> 
    </div>
  );
}

export default App;
