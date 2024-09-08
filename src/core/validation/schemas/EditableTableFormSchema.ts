import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { z } from 'zod';

const validateDate = (date: dayjs.Dayjs) => dayjs.isDayjs(date) && date.isValid();
dayjs.extend(utc);

export const dateSchema = z
  .custom<Dayjs | string>()
  .refine((date) => validateDate(dayjs.utc(date)), 'Date is invalid')
  .transform((value) => {
    const transformedDate = dayjs.utc(value).toISOString();
    return transformedDate;
  });

const EditableTableFormSchema = z.object({
  companySigDate: dateSchema,
  companySignatureName: z.string().min(1, 'Company signature name is required'),
  documentName: z.string().min(1, 'Document name is required'),
  documentStatus: z.string().min(1, 'Document status is required'),
  documentType: z.string().min(1, 'Document type is required'),
  employeeNumber: z.string().min(1, 'Employee number is required'),
  employeeSigDate: dateSchema,
  employeeSignatureName: z.string().min(1, 'Employee signature name is required'),
});
export default EditableTableFormSchema;
