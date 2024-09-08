import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Typography } from '@mui/material';
import { TableData } from '../../../../../../models/TableData';

interface EditableTableProps {
  tableData: TableData;
  index: number;
}

export function EditableTable({ tableData, index }: EditableTableProps) {
  return (
    <div className="flex gap-3 items-start flex-col p-4 border border-gray-300 rounded-md shadow-sm text-start">
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

      <Button variant="contained" size="small" startIcon={<DeleteIcon />} color="secondary">
        Remove
      </Button>
    </div>
  );
}
