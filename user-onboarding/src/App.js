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




  return (
    <div className="App">
      <Forms /> 
    </div>
  );
}

export default App;
