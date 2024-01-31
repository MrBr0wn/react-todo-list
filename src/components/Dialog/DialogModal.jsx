import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import './DialogModal.css'

const DialogModal = () => {
  return (
    <Dialog open={true}>
      <DialogTitle>Add new Todo</DialogTitle>

      <DialogContent>
        <form onSubmit={() => {}}>
          <TextField 
            label="Todo"
            variant="outlined"
            onChange={(e) => {}}
            value=""
          />
          <TextField 
            label="Note"
            variant="outlined"
            onChange={(e) => {}}
            value=""
            multiline
            minRows={4}
          />

          <DialogActions>
            <Button color="primary" onClick={() => {}}>Close</Button>
            <Button disabled={false} type="submit" color="primary" onClick={() => {}}>Add</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default DialogModal