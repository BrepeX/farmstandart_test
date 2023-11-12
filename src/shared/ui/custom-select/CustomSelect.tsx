import { Form, Select } from "antd";
import { FC, useEffect, useState } from "react";
import { GeneralControl } from "@widgets/collecting-components/types";
import { fetchOptions } from "./fetchOptions.ts";

export const CustomSelect: FC<GeneralControl> = ({
  disabled,
  placeholder,
  label,
  label_position,
  id,
  value_selection_url,
}) => {
  const [options, setOptions] = useState<Record<number, string>[]>([]);

  useEffect(() => {
    if (value_selection_url)
      fetchOptions(value_selection_url)
        .then((response) => {
          const optionsData = Object.entries(response).map(
            ([value, label]) => ({
              value: value,
              label: label,
            }),
          );

          setOptions(optionsData);
        })
        .catch((error) => {
          console.error(error);
        });
  }, [value_selection_url]);

  return (
    <Form.Item labelAlign={label_position} name={id} label={label}>
      <Select
        loading={options.length === 0}
        options={options}
        disabled={disabled}
        placeholder={placeholder}
      />
    </Form.Item>
  );
};
