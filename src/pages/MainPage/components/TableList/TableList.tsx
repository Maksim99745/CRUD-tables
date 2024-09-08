import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button, ButtonProps } from '@mui/material';
import { TableData } from '../../../../models/TableData';
import { EditableTable } from './components/EditableTable/EditableTable';
import { TableEditDialog } from './components/EditableTableDialog/EditableTableDialog';

interface TableListProps {
  tablesData: TableData[];
}

function EditTableButton(props: ButtonProps) {
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

export function TableList({ tablesData }: TableListProps) {
  // const {
  //   register,
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<TableDataList>({
  //   resolver: zodResolver(crudTableSchema),
  //   mode: 'all',
  //   defaultValues: { tableDataList: tablesData },
  // });

  return (
    <div className="flex flex-col gap-4">
      <TableEditDialog isNewTable openControl={EditTableButton} />
      <div className="flex">
        {/* <form className="grid grid-cols-1 md:grid-cols-3 gap-4" onSubmit={handleSubmit(onSubmit)}> */}
        {tablesData.map((table, index) => (
          <div key={table.id || crypto.randomUUID()} className="flex p-4 bg-white shadow-md rounded-lg">
            <EditableTable index={index} tableData={table} />
            {/* <CrudTable index={index} tableData={table} /> */}
          </div>
        ))}
        {/* </form> */}
      </div>
    </div>
  );
}
