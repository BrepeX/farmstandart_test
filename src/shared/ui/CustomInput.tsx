import { Form, Input, InputProps } from "antd";
import { FC } from "react";

export const CustomInput: FC<InputProps> = ({ ...args }) => (
  <Form.Item>
    <Input {...args} />
  </Form.Item>
);
