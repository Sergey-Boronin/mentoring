import React from "react";
import { PersonalInfoForm } from "./forms/PersonalInfoForm";
import { AddressForm } from "./forms/AddressForm";
import { Routes, Route } from "react-router-dom"
import Result from "./forms/Result";

import "./styles.css";

function App() {

  const [formData, setFormData ] = React.useState({})

  console.log(formData)

  return (
      <div className="App">
          <Routes> 
            <Route path="/" exact element={<PersonalInfoForm setFormData={setFormData} />} />
            <Route path="/address" element={<AddressForm setFormData={setFormData} />} />
            <Route path="/result" element={<Result formData={formData} />}  />
          </Routes>
        </div>
      
  );
}

export default App;
