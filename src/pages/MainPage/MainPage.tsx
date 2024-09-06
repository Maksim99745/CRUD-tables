import { Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { TableDataList } from '../../models/TableData';
import { TableList } from './components/TableList/TableList';
import { useGetTablesData } from './hooks/useGetTablesData';

export default function MainPage() {
  const { tablesData, error, isLoading } = useGetTablesData();
  const isTablesData = tablesData.length === 0;
  const {
    register,
    getValues,
    control,
    watch,
    setValue,
    handleSubmit,

    formState: { errors },
  } = useForm<TableDataList>({
    // resolver: zodResolver(),
    mode: 'all',
  });

  return (
    <div className="flex">
      {!isTablesData && <TableList errors={errors} control={control} register={register} tablesData={tablesData} />}
      {isTablesData && <Typography variant="h3">There will be placed tables data</Typography>}
    </div>
  );
}
