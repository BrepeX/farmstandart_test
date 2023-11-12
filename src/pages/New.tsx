import { useEffect, useState } from "react";
import { TResponseData } from "@widgets/collecting-components/types";
import { fetchComponentsData } from "@widgets/collecting-components/api/fetchComponentsData.ts";

// const res = {
//   firstname: "Stanislav",
//   lastname: "Kushnir",
//   middlename: "Vital'evich",
//   gender: "male",
//   date_of_birth: "2022-12-31T21:00:00.000Z",
//   experience: "6",
//   email: "svkushnir@f-soft.org",
//   comment: "Some comment",
// };

export const New = () => {
  const [formData, setFormData] = useState<TResponseData | null>(null);

  useEffect(() => {
    fetchComponentsData().then((res) => setFormData(res));
  }, []);

  console.log(formData);

  return <div></div>;
};
