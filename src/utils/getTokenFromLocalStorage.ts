export const getTokenFromLocalStorage = (): string | null => {
  const authDataJSON = localStorage.getItem('CRUD-tables');
  if (authDataJSON) {
    const authData = JSON.parse(authDataJSON);
    return authData.token;
  }
  return null;
};
