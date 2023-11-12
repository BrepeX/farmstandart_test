import { useEffect, useState } from 'react';

const formMeta = async () => {
  const res = await fetch('/api/v1/new');
  return await res.json();
};

const res = {
  firstname: 'Stanislav',
  lastname: 'Kushnir',
  middlename: "Vital'evich",
  gender: 'male',
  date_of_birth: '2022-12-31T21:00:00.000Z',
  experience: '6',
  email: 'svkushnir@f-soft.org',
  comment: 'Some comment',
};

export const New = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    formMeta().then((res) => setFormData(res));
  }, []);

  const puk = () => {
    console.log({ ...res });
    return <textarea value={String({ ...res })} />;
  };

  console.log(formData);

  return <code>{puk()}</code>;
};
