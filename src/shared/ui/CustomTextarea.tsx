import TextArea from "antd/es/input/TextArea";
import { Form } from "antd";
import { FC } from "react";
import { GeneralControl } from "@widgets/collecting-components/types";

export const CustomTextarea: FC<GeneralControl> = ({ id, label, value }) => (
  <Form.Item name={id} label={label}>
    <TextArea value={value} />
  </Form.Item>
);
