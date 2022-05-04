import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Alert, Snackbar } from '@mui/material';
import axios from 'axios';
import apiUrl from '../utils/apiUrl';


const CustomAlert = () => {
  const location = useLocation();
  const [ alert, setAlert ] = useState({});

  const getAlert = async() => {
    const response = await axios.get(`${apiUrl}alert/`, { withCredentials: true });
    console.log('alert', response.data);
    setAlert({
      active: true,
      type: response.data.success ? 'success' : 'error',
      text: response.data.success || response.data.error
    })
  }

  useEffect(() => {
    getAlert();
  }, [location]);
  
  const handleAlertClose = () => {
    setAlert({
      active: false,
      type: '',
      text: ''
    });
  }


  return (
    <div>
      {alert.text !== '' ? 
      <Snackbar anchorOrigin={{ vertical:'top', horizontal:'center' }} open={alert.active} autoHideDuration={5000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity={alert.type} sx={{ width: '100%' }}>
          {alert.text}
        </Alert>
      </Snackbar> : ''}
    </div>
  );
}

export default CustomAlert;