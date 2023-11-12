export const fetchOptions = async (
  url: string,
): Promise<Record<number, string>> => {
  const response = await fetch(url);
  return await response.json();
};
