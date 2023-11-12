import { Form, FormProps } from "antd";
import { FC, PropsWithChildren } from "react";

type TCustomFormProps = PropsWithChildren & FormProps;

export const CustomForm: FC<TCustomFormProps> = ({ children, ...args }) => (
  <Form {...args}>{children}</Form>
);
