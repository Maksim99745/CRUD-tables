import { TableData } from './TableData';

export interface ApiResponse {
  error_code: number;
  error_message: string;
  data: TableData[];
  profiling: string | null;
  timings: string | null;
}
