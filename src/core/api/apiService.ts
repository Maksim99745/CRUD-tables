import { ApiResponse } from '../../models/ApiResponce';
import { HOST } from '../../models/Host';
import { TableData } from '../../models/TableData';
import { getTokenFromLocalStorage } from '../../utils/getTokenFromLocalStorage';

export class ApiService {
  public static async getTablesData(): Promise<ApiResponse | null> {
    const token = getTokenFromLocalStorage();

    if (!token) {
      console.error('You don"t have token, login in again');
      return null;
    }

    try {
      const response = await fetch(`${HOST}/ru/data/v3/testmethods/docs/userdocs/get`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-auth': token,
        },
      });

      if (!response.ok) {
        console.error('Failed to fetch tables data', response.statusText);
        return null;
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error while fetching tables data:', error);
      return null;
    }
  }

  public static async addTableData(tableData: TableData): Promise<ApiResponse | null> {
    const token = getTokenFromLocalStorage();

    if (!token) {
      console.error('You don"t have token, login in again');
      return null;
    }

    try {
      const response = await fetch(`${HOST}/ru/data/v3/testmethods/docs/userdocs/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth': token,
        },
        body: JSON.stringify(tableData),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error('Failed to fetch tables data:', errorResponse);
        return null;
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error while fetching tables data:', error);
      return null;
    }
  }

  public static async updateTableData(tableData: TableData, id: string): Promise<ApiResponse | null> {
    const token = getTokenFromLocalStorage();

    if (!token) {
      console.error('You don"t have token, login in again');
      return null;
    }

    try {
      const response = await fetch(`${HOST}/ru/data/v3/testmethods/docs/userdocs/set/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth': token,
        },
        body: JSON.stringify(tableData),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error('Failed to fetch tables data:', errorResponse);
        return null;
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error while fetching tables data:', error);
      return null;
    }
  }

  public static async removeTableData(id: string): Promise<ApiResponse | null> {
    const token = getTokenFromLocalStorage();

    if (!token) {
      console.error('You don"t have token, login in again');
      return null;
    }

    try {
      const response = await fetch(`${HOST}/ru/data/v3/testmethods/docs/userdocs/delete/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth': token,
        },
      });

      if (!response.ok) {
        console.error('Failed to fetch tables data', response.statusText);
        return null;
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error while fetching tables data:', error);
      return null;
    }
  }
}
