import useSWR from 'swr';
import { ApiService } from '../../../core/api/apiService';

const fetcher = () => ApiService.getTablesData();

export const useGetTablesData = () => {
  const { data, isValidating, error, mutate } = useSWR('tablesData', fetcher);

  if (error) {
    console.error(error);
  }

  const tablesData = data?.data ?? [];
  const refetchTablesData = () => {
    mutate();
  };
  return {
    tablesData,
    isLoading: isValidating,
    error,
    mutate,
    refetchTablesData,
  };
};
