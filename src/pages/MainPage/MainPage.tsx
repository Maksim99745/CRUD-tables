import { Typography } from '@mui/material';
import { TableList } from './components/TableList/TableList';
import { useGetTablesData } from './hooks/useGetTablesData';

export default function MainPage() {
  const { tablesData, error, isLoading } = useGetTablesData();
  const isTablesData = tablesData.length === 0;

  return (
    <div className="flex">
      {!isTablesData && <TableList tablesData={tablesData} />}
      {isTablesData && <Typography variant="h3">There will be placed tables data</Typography>}
    </div>
  );
}
