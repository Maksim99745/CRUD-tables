import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button, ButtonProps, CircularProgress, Typography } from '@mui/material';
import { TableData } from '../../../../models/TableData';
import { ReadOnlyTable } from './components/ReadOnlyTable/ReadOnlyTable';
import { TableEditDialog } from './components/TableEditDialog/TableEditDialog';

function AddTableButton(props: ButtonProps) {
  return (
    <Button
      startIcon={<AddBoxIcon />}
      color="primary"
      variant="contained"
      type="button"
      className="w-auto self-end"
      {...props}
    >
      Add table
    </Button>
  );
}
interface TableListProps {
  tablesData: TableData[];
  isLoading: boolean;
  refetchTablesData: () => void;
}

export function TableList({ tablesData, isLoading, refetchTablesData }: TableListProps) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <TableEditDialog refetchTablesData={refetchTablesData} openControl={AddTableButton} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tablesData.map((table) => (
          <ReadOnlyTable
            refetchTablesData={refetchTablesData}
            isLoading={isLoading}
            key={table.id || crypto.randomUUID()}
            tableData={table}
          />
        ))}
      </div>
      {tablesData.length === 0 && !isLoading && <Typography variant="h3">There will be placed tables data</Typography>}
      {tablesData.length === 0 && isLoading && <CircularProgress />}
    </div>
  );
}
