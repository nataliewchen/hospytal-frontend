import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// components
import Navbar from './components/Navbar';
import CustomAlert from './components/CustomAlert';
import Home from './components/Home';
import List from './components/List';
import PersonDialog from './components/PersonDialog';
import AppointmentDialog from './components/AppointmentDialog';
import PatientForm from './components/PatientForm';
import DoctorForm from './components/DoctorForm';
import AppointmentForm from './components/AppointmentForm';

function App() {

  return (
    <div className="App">
       <Router>
    <Navbar />
    <main>
      <CustomAlert />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="patients" element={ <List type='patients' /> } >
          <Route path=":id" element={ <PersonDialog type='patients' /> } />
        </Route>
        <Route path="patients/create" element={ <PatientForm mode='Create' /> } />
        <Route path="patients/:id/update" element={ <PatientForm mode='Update' /> } />
  

        <Route path="doctors" element={ <List type='doctors' /> } >
          <Route path=":id" element={ <PersonDialog type='doctors' /> } />
        </Route>
        <Route path="doctors/create" element={ <DoctorForm mode='Create' /> } />
        <Route path="doctors/:id/update" element={ <DoctorForm mode='Update' /> } />


        <Route path="appointments" element={ <List type='appointments' /> } >
          <Route path=":id" element={ <AppointmentDialog /> } />
        </Route>
        <Route path="appointments/create" element={ <AppointmentForm mode='Create' /> } />
        <Route path="appointments/create/:type/:id" element={ <AppointmentForm mode='CreateFrom' /> } />
        <Route path="appointments/:id/update" element={ <AppointmentForm mode='Update' /> } />
      </Routes>
      </main>
    </Router>
    </div>
  );
}

export default App;
