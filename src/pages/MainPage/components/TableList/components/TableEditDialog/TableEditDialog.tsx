import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { ElementType } from 'react';
import { useModalState } from '../../../../../../hooks/useModalState';
import { TableData } from '../../../../../../models/TableData';
import { EditableTableForm } from '../EditableTableForm/EditableTableForm';

export interface TableEditDialogProps {
  tableData?: TableData;
  openControl: ElementType;
  disabled?: boolean;
  refetchTablesData: () => void;
}

export function TableEditDialog({
  openControl: OpenControl,
  refetchTablesData,
  disabled = false,
  tableData,
}: TableEditDialogProps) {
  const { visible, show, close } = useModalState();

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
          {tableData ? 'Update table' : 'Add new table'}
        </DialogTitle>
        <DialogContent>
          <EditableTableForm refetchTablesData={refetchTablesData} closeDialog={close} tableData={tableData} />
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
