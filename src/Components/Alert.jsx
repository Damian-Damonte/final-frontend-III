import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';


export default function TransitionAlerts({name, setSendForm}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(name !== "");
  }, [name]);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
                setSendForm("");
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Thank you {name}, we will contact you as soon as possible via email
        </Alert>
      </Collapse>
    </Box>
  );
}
