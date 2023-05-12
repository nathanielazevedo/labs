import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Button } from '@mui/material';
import Auth from './Auth';
import GeneralInfo from './GeneralInfo';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Authentication from '../../api/Auth';
import NavBar from '../marketing/Navbar';

const steps = ['General Info', 'Authentication'];

export default function SignUpStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    lab_name: '',
    university_name: '',
    field_of_study: '',
    lab_description: '',
  });

  const handleRegister = async () => {
    if (!formData.email || !formData.password) return setError(true);
    try {
      const user = await Authentication.register(formData);
      if (user) {
        navigate('/mylab', { replace: true });
      }
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    user && navigate('/mylab', { replace: true });
  }, [navigate]);

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <GeneralInfo formData={formData} setFormData={setFormData} />;
      case 1:
        return <Auth formData={formData} setFormData={setFormData} />;
      default:
        return 'Unknown step';
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleRegister();
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const isDisabled = () => {
    if (activeStep === 1) {
      return formData.email === '' || formData.password === '';
    } else {
      return (
        formData.lab_name === '' ||
        formData.university_name === '' ||
        formData.field_of_study === '' ||
        formData.lab_description === ''
      );
    }
  };

  return (
    <>
      <NavBar show={true} text='Login' />
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Stepper
          activeStep={0}
          alternativeLabel
          sx={{
            width: '70%',
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {getStepContent(activeStep)}
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color='inherit'
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext} disabled={isDisabled()}>
              {activeStep === steps.length - 1 ? 'Sign Up' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      </Box>
    </>
  );
}
