import { TResponseData } from "../types";

export const fetchComponentsData = async (): Promise<TResponseData> => {
  const res = await fetch("/api/v1/new");
  return await res.json();
};
