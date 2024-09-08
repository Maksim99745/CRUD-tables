import DeleteIcon from '@mui/icons-material/Delete';
import { Button, TextField, Typography } from '@mui/material';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { TableData, TableDataList } from '../../../../../../models/TableData';

interface EditableTableFormProps {
  tableData: TableData;
  register: UseFormRegister<TableDataList>;
  index: number;
  errors: FieldErrors<TableDataList>;
}

export function EditableTableForm({ tableData, index, errors }: EditableTableFormProps) {
  return (
    <div className="flex gap-3 items-center flex-col">
      <Typography variant="h5">CRUD table</Typography>
      <TextField
        label="Company Sig Date"
        placeholder="Enter company signature date"
        {...register(`tableDataList.${index}.companySigDate`)}
        error={!!errors?.tableDataList?.[index]?.companySigDate}
        helperText={errors?.tableDataList?.[index]?.companySigDate?.message}
      />

      <TextField
        label="Company Signature Name"
        placeholder="Enter company signature name"
        {...register(`tableDataList.${index}.companySignatureName`)}
        error={!!errors?.tableDataList?.[index]?.companySignatureName}
        helperText={errors?.tableDataList?.[index]?.companySignatureName?.message}
      />

      <TextField
        label="Document Name"
        placeholder="Enter document name"
        {...register(`tableDataList.${index}.documentName`)}
        error={!!errors?.tableDataList?.[index]?.documentName}
        helperText={errors?.tableDataList?.[index]?.documentName?.message}
      />

      <TextField
        label="Document Status"
        placeholder="Enter document status"
        {...register(`tableDataList.${index}.documentStatus`)}
        error={!!errors?.tableDataList?.[index]?.documentStatus}
        helperText={errors?.tableDataList?.[index]?.documentStatus?.message}
      />

      <TextField
        label="Document Type"
        placeholder="Enter document type"
        {...register(`tableDataList.${index}.documentType`)}
        error={!!errors?.tableDataList?.[index]?.documentType}
        helperText={errors?.tableDataList?.[index]?.documentType?.message}
      />

      <TextField
        label="Employee Number"
        placeholder="Enter employee number"
        {...register(`tableDataList.${index}.employeeNumber`)}
        error={!!errors?.tableDataList?.[index]?.employeeNumber}
        helperText={errors?.tableDataList?.[index]?.employeeNumber?.message}
      />

      <TextField
        label="Employee Sig Date"
        placeholder="Enter employee signature date"
        {...register(`tableDataList.${index}.employeeSigDate`)}
        error={!!errors?.tableDataList?.[index]?.employeeSigDate}
        helperText={errors?.tableDataList?.[index]?.employeeSigDate?.message}
      />

      <TextField
        label="Employee Signature Name"
        placeholder="Enter employee signature name"
        {...register(`tableDataList.${index}.employeeSignatureName`)}
        error={!!errors?.tableDataList?.[index]?.employeeSignatureName}
        helperText={errors?.tableDataList?.[index]?.employeeSignatureName?.message}
      />

      <Button variant="contained" type="submit">
        Submit
      </Button>

      <Button variant="contained" size="small" startIcon={<DeleteIcon />} color="secondary">
        Save
      </Button>
    </div>
  );
}
