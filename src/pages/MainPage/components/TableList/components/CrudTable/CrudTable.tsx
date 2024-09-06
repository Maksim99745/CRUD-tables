import { TableData } from '../../../../../../models/TableData';

interface CrudTableProps {
  tableData: TableData;
}
export function CrudTable({ tableData }: CrudTableProps) {
  return <div>{tableData.companySigDate}</div>;
}
