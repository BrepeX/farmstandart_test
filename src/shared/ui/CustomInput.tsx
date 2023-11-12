import { Form, Input } from "antd";
import { FC } from "react";
import { GeneralControl } from "@widgets/collecting-components/types";

export const CustomInput: FC<GeneralControl> = ({
  placeholder,
  disabled,
  label,
  control_kind,
  label_position,
  id,
}) => (
  <Form.Item labelAlign={label_position} label={label} name={id}>
    <Input type={control_kind} disabled={disabled} placeholder={placeholder} />
  </Form.Item>
);
