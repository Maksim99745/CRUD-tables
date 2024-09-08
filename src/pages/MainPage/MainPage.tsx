import { TableList } from './components/TableList/TableList';
import { useGetTablesData } from './hooks/useGetTablesData';

export default function MainPage() {
  const { tablesData, isLoading, refetchTablesData } = useGetTablesData();

  return (
    <div className="flex">
      <TableList refetchTablesData={refetchTablesData} tablesData={tablesData} isLoading={isLoading} />
    </div>
  );
}
