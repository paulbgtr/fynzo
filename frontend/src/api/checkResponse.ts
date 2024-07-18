export const checkResponse = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};
