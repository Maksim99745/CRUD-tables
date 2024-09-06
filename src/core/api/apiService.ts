import { HOST } from '../models/Host';

export class ApiService {
  public static async getTablesData() {
    const token = getTokenFromLocalStorage();
    let result;
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
        throw new Error('Failed to fetch tables data');
      }
      result = response.json();
    } catch (error) {
      console.error('Error while login in', error);
    }
    return result;
  }
}
