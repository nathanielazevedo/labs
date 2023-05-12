import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../tools/hooks';
import { updateLabBasicInfo } from '../../features/labs/labsSlice';

type FormDialogPropsType = {
  close: () => void;
};

const FormDialog = ({ close }: FormDialogPropsType) => {
  const dispatch = useAppDispatch();
  const lab = useSelector((state: any) => state.lab.lab);
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
    <div>
      <Dialog open>
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
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Description'
            fullWidth
            variant='standard'
            value={formData.lab_description}
            onChange={(e) =>
              setFormData({ ...formData, lab_description: e.target.value })
            }
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
