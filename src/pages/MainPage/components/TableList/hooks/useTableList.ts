import { Control, useFieldArray } from 'react-hook-form';
import { DEFAULT_TABLE_DATA } from '../../../../../models/DefaultTableData';
import { TableDataList } from '../../../../../models/TableData';

interface UseTableList {
  control: Control<TableDataList>;
}
export const useTableList = ({ control }: UseTableList) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tableDataList',
  });

  const addField = () => {
    append(DEFAULT_TABLE_DATA);
  };

  const removeField = (index: number) => {
    remove(index);
  };
  return { fields, addField, removeField };
};
