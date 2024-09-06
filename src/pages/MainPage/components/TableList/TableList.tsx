import { Control, FieldErrors, UseFormRegister } from 'react-hook-form';
import { TableData, TableDataList } from '../../../../models/TableData';
import { CrudTable } from './components/CrudTable/CrudTable';

interface TableListProps {
  // eslint-disable-next-line react/no-unused-prop-types
  control: Control<TableDataList>;
  tablesData: TableData[];
  // eslint-disable-next-line react/no-unused-prop-types
  errors: FieldErrors<TableDataList>;
  // eslint-disable-next-line react/no-unused-prop-types
  register: UseFormRegister<TableDataList>;
}
export function TableList({ tablesData }: TableListProps) {
  // const { fields, addField, removeField } = useTableList({
  //   control,
  // });
  // github.com/Tetiana-KET/graphiql-app/blob/9cb08dbd3d0a47b035c96104d8d52159e52c487b/src/app/%5Blocale%5D/_components/RequestKeyValuePairs/RequestKeyValuePairs.tsx
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tablesData.map((table) => (
        <CrudTable key={table.id} tableData={table} />
      ))}
    </div>
  );
}
