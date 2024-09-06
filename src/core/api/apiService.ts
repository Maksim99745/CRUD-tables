import { ApiResponse } from '../../models/ApiResponce';
import { HOST } from '../../models/Host';
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
}
