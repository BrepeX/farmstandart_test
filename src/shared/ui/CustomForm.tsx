import { Form } from "antd";
import { FC, PropsWithChildren } from "react";
import { GeneralControl } from "@widgets/collecting-components/types";

type TCustomFormProps = PropsWithChildren & GeneralControl;

export const CustomForm: FC<TCustomFormProps> = ({ children, disabled }) => (
  <Form disabled={disabled}>{children}</Form>
);
