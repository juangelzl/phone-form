import logo from './logo.svg';
import './App.css';
import PhoneForm from './Components/PhoneForm'
import { useState } from 'react';
import Modal from './Components/Modal';
function App() {
  const [error,setError]=useState(false);
  const hideErrorHandler=()=>{
    setError(false);
  }
  const showErrorHandler=()=>{
    setError(true);
  }
  return (
    <div className="App">
      {error && <Modal onClose={hideErrorHandler} ></Modal>}
      <PhoneForm onChange={showErrorHandler}></PhoneForm>
    </div>
  );
}

export default App;
