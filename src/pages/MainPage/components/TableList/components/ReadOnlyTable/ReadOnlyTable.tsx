import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { LoadingButton } from '@mui/lab';
import { Box, Button, ButtonProps, Typography } from '@mui/material';
import { useState } from 'react';
import { ApiService } from '../../../../../../core/api/apiService';
import { TableData } from '../../../../../../models/TableData';
import { TableEditDialog } from '../TableEditDialog/TableEditDialog';

function EditTableButton(props: ButtonProps) {
  return (
    <Button
      startIcon={<EditIcon />}
      color="secondary"
      size="small"
      variant="contained"
      type="button"
      className="w-auto self-end"
      {...props}
    >
      Edit
    </Button>
  );
}

interface ReadOnlyTableProps {
  tableData: TableData;
  isLoading: boolean;
  refetchTablesData: () => void;
}

export function ReadOnlyTable({ tableData, isLoading, refetchTablesData }: ReadOnlyTableProps) {
  const [isBusy, setIsBusy] = useState(false);

  const removeTable = async (id: string) => {
    setIsBusy(true);
    await ApiService.removeTableData(id);
    await refetchTablesData();
    setIsBusy(false);
  };

  return (
    <div className="flex flex-col justify-between p-4 border border-gray-300 rounded-md shadow-sm h-full">
      <div className="flex flex-col gap-2">
        <Typography variant="h5">CRUD Table</Typography>
        <Typography variant="body1">
          <strong>Company Signature Date: </strong>
          {tableData.companySigDate || 'N/A'}
        </Typography>
        <Typography variant="body1">
          <strong>Company Signature Name: </strong>
          {tableData.companySignatureName || 'N/A'}
        </Typography>
        <Typography variant="body1">
          <strong>Document Name: </strong>
          {tableData.documentName || 'N/A'}
        </Typography>
        <Typography variant="body1">
          <strong>Document Status: </strong>
          {tableData.documentStatus || 'N/A'}
        </Typography>
        <Typography variant="body1">
          <strong>Document Type: </strong>
          {tableData.documentType || 'N/A'}
        </Typography>
        <Typography variant="body1">
          <strong>Employee Number: </strong>
          {tableData.employeeNumber || 'N/A'}
        </Typography>
        <Typography variant="body1">
          <strong>Employee Signature Date: </strong>
          {tableData.employeeSigDate || 'N/A'}
        </Typography>
        <Typography variant="body1">
          <strong>Employee Signature Name: </strong>
          {tableData.employeeSignatureName || 'N/A'}
        </Typography>
        <Box className="flex flex-row gap-3">
          <TableEditDialog openControl={EditTableButton} refetchTablesData={refetchTablesData} tableData={tableData} />
          <LoadingButton
            variant="contained"
            size="small"
            startIcon={<DeleteIcon />}
            color="secondary"
            onClick={() => removeTable(tableData.id)}
            className="mt-4 max-w-fit self-end"
            loading={isLoading || isBusy}
          >
            Remove
          </LoadingButton>
        </Box>
      </div>
    </div>
  );
}
