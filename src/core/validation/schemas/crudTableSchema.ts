import { z } from 'zod';

const crudTableSchema = z.object({
  tableDataList: z.array(
    z.object({
      companySigDate: z.string().min(1, 'Company signature date is required'),
      companySignatureName: z.string().min(1, 'Company signature name is required'),
      documentName: z.string().min(1, 'Document name is required'),
      documentStatus: z.string().min(1, 'Document status is required'),
      documentType: z.string().min(1, 'Document type is required'),
      employeeNumber: z.string().min(1, 'Employee number is required'),
      employeeSigDate: z.string().min(1, 'Employee signature date is required'),
      employeeSignatureName: z.string().min(1, 'Employee signature name is required'),
    }),
  ),
});
export default crudTableSchema;
