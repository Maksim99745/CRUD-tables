import useSWR from 'swr';
import { ApiService } from '../../../core/api/apiService';

const fetcher = () => ApiService.getTablesData();

export const useGetTablesData = () => {
  const { data, isLoading, error } = useSWR('tablesData', fetcher);
  const tablesData = data?.data ?? [];
  return {
    tablesData,
    isLoading,
    error,
  };
};
