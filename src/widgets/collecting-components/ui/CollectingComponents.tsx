import { useEffect, useState } from "react";
import { fetchComponentsData } from "../api/fetchComponentsData.ts";
import { TResponseData } from "../types";
import RenderControl from "./RenderControl.tsx";

export const CollectingComponents = () => {
  const [formData, setFormData] = useState<null | TResponseData>();

  useEffect(() => {
    fetchComponentsData().then((response) => setFormData(response));
  }, []);

  return <div>{formData && <RenderControl controlData={formData.view} />}</div>;
};
