import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, useEventCallback } from '@mui/material';
import { ElementType } from 'react';
import { useModalState } from '../../../../../../hooks/useModalState';

export interface TableEditDialogProps {
  isNewTable: boolean;
  openControl: ElementType;
  disabled?: boolean;
}

export function TableEditDialog({ isNewTable, openControl: OpenControl, disabled = false }: TableEditDialogProps) {
  const { visible, show, close } = useModalState();

  const handleSubmitTable = useEventCallback(() => {
    close();
  });

  return (
    <Box sx={{ ml: 'auto' }}>
      <OpenControl onClick={show} disabled={disabled} />
      <Dialog
        open={visible}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" alignSelf="center">
          {isNewTable ? 'Add new table' : 'Update table'}
        </DialogTitle>
        <DialogContent>dddd</DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={handleSubmitTable} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
