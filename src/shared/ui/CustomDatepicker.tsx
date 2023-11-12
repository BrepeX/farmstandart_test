import { DatePicker, Form } from "antd";
import { FC } from "react";
import { GeneralControl } from "@widgets/collecting-components/types";

export const CustomDatepicker: FC<GeneralControl> = ({
  label,
  label_position,
  id,
}) => (
  <Form.Item name={id} labelAlign={label_position} label={label}>
    <DatePicker style={{ width: "100%" }} />
  </Form.Item>
);
