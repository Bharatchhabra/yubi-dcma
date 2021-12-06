import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {IoEllipsisHorizontalCircleOutline} from 'react-icons/io5'
import alerttriangle from '../../assets/images/alert-triangle.png'
import './alert.scss'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid transprent',
  boxShadow: 24,
};

export default function AlertModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className="btn-modal"><IoEllipsisHorizontalCircleOutline /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className="modalheader">
            <img src={alerttriangle} />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mb: 3, fontSize: 30, fontWeight: 700, textAlign: 'center', fontFamily: 'Oxygen', }}>
              Warning
          </Typography>
          <Typography id="modal-modal-description" sx={{ mb: 3, fontSize: 16, textAlign: 'center', fontFamily: 'Source Sans Pro', }}>
              Are you sure you want to delete this alert?
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}