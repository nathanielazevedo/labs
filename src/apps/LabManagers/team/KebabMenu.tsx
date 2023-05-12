import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { deleteMember } from '../../../features/labs/labsSlice';
import { useAppDispatch } from '../../../tools/hooks';

export default function BasicMenu({ data, labId }: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();

  const handleClick = (event: any) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const deleteLab = async (data: any) => {
    try {
      await dispatch(deleteMember({ memberId: data.id, labId }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <MoreVertIcon
        id='basic-button'
        onClick={handleClick}
        sx={{ cursor: 'pointer' }}
      />
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            deleteLab(data);
          }}
        >
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
}
