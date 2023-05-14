import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { addMember } from '../features/labs/labsSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../tools/hooks';

type FormDialogPropsType = {
  close: () => void;
};

const FormDialog = ({ close }: FormDialogPropsType) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = React.useState({
    name: '',
    position: '',
  });
  const lab = useSelector((state: any) => state.lab.myLab);

  const handleSubmit = () => {
    close();
    try {
      dispatch(addMember({ id: lab._id, formData }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Dialog open>
        <DialogTitle>Add a Lab Member</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Name'
            fullWidth
            variant='standard'
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Position'
            fullWidth
            variant='standard'
            onChange={(e) =>
              setFormData({ ...formData, position: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={handleSubmit}>Add Member</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
