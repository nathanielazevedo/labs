import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../tools/hooks';
import { updateLabBasicInfo } from '../../../features/labs/labsSlice';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 10px;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === 'dark' ? grey[900] : grey[50]
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === 'dark' ? blue[500] : blue[200]
      };
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);

type FormDialogPropsType = {
  close: () => void;
};

const FormDialog = ({ close }: FormDialogPropsType) => {
  const dispatch = useAppDispatch();
  const lab = useSelector((state: any) => state.lab.myLab);
  const [formData, setFormData] = React.useState({
    lab_name: lab.lab_name,
    lab_description: lab.lab_description,
  });

  const handleSubmit = () => {
    close();
    try {
      dispatch(updateLabBasicInfo({ id: lab._id, formData }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ width: '800px' }}>
      <Dialog open fullWidth>
        <DialogTitle>Edit Lab Info</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Name'
            fullWidth
            variant='standard'
            value={formData.lab_name}
            onChange={(e) =>
              setFormData({ ...formData, lab_name: e.target.value })
            }
          />
          <Typography
            variant='subtitle2'
            sx={{ marginTop: '20px', color: 'lightgray' }}
          >
            Description
          </Typography>
          <StyledTextarea
            aria-label='minimum height'
            minRows={3}
            placeholder='Lab Description'
            onChange={(e: any) =>
              setFormData({ ...formData, lab_description: e.target.value })
            }
            value={formData.lab_description}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={handleSubmit}>Save Changes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
