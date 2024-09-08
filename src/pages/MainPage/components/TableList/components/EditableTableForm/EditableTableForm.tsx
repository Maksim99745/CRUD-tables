import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { DatePickerElement } from 'react-hook-form-mui/date-pickers';
import { ApiService } from '../../../../../../core/api/apiService';
import EditableTableFormSchema from '../../../../../../core/validation/schemas/EditableTableFormSchema';
import { DEFAULT_TABLE_DATA } from '../../../../../../models/DefaultTableData';
import { TableData } from '../../../../../../models/TableData';

interface EditableTableFormProps {
  tableData?: TableData;
  closeDialog: () => void;
  refetchTablesData: () => void;
}

export function EditableTableForm({ tableData, closeDialog, refetchTablesData }: EditableTableFormProps) {
  const onSubmit = async (newTable: TableData) => {
    closeDialog();
    if (!tableData) {
      await ApiService.addTableData(newTable);
    } else {
      await ApiService.updateTableData(newTable, tableData.id);
    }

    await refetchTablesData();
  };

  return (
    <FormContainer<TableData>
      resolver={zodResolver(EditableTableFormSchema)}
      defaultValues={tableData || DEFAULT_TABLE_DATA}
      onSuccess={onSubmit}
      mode="all"
    >
      <Stack justifyContent="center" alignItems="center" className="p-3 min-w-80">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePickerElement
            name="companySigDate"
            label="Company Sig Date"
            className="w-full"
            required
            helperText=" "
          />
        </LocalizationProvider>

        <TextFieldElement<TableData>
          name="companySignatureName"
          label="Company Signature Name"
          placeholder="Enter company signature name"
          fullWidth
          required
          helperText=" "
        />
        <TextFieldElement<TableData>
          name="documentName"
          label="Document Name"
          placeholder="Enter document name"
          fullWidth
          required
          helperText=" "
        />
        <TextFieldElement<TableData>
          name="documentStatus"
          label="Document Status"
          placeholder="Enter document status"
          fullWidth
          required
          helperText=" "
        />
        <TextFieldElement<TableData>
          name="documentType"
          label="Document Type"
          placeholder="Enter document type"
          fullWidth
          required
          helperText=" "
        />
        <TextFieldElement<TableData>
          name="employeeNumber"
          label="Employee Number"
          placeholder="Enter employee number"
          fullWidth
          required
          helperText=" "
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePickerElement
            name="employeeSigDate"
            label="Employee Sig Date"
            required
            helperText=" "
            className="w-full"
          />
        </LocalizationProvider>
        <TextFieldElement<TableData>
          name="employeeSignatureName"
          label="Employee Signature Name"
          placeholder="Enter employee signature name"
          fullWidth
          required
          helperText=" "
        />
        <Button variant="contained" size="small" color="secondary" className="self-end" type="submit">
          Save
        </Button>
      </Stack>
    </FormContainer>
  );
}
