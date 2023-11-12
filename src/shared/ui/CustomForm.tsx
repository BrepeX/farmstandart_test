import { Form } from "antd";
import { FC, PropsWithChildren } from "react";
import { GeneralControl } from "@widgets/collecting-components/types";
import { useForm } from "antd/es/form/Form";

type TCustomFormProps = PropsWithChildren & GeneralControl;

export const CustomForm: FC<TCustomFormProps> = ({ children, disabled }) => {
  const [form] = useForm();

  return (
    <Form form={form} disabled={disabled}>
      {children}
    </Form>
  );
};
