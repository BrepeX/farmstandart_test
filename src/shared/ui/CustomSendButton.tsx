import { Button, Form } from "antd";
import { FC } from "react";
import { GeneralControl } from "@widgets/collecting-components/types";
import useFormInstance from "antd/es/form/hooks/useFormInstance";

export const CustomSendButton: FC<GeneralControl> = ({
  name,
  id,
  disabled,
  style,
  action_url,
  method,
}) => {
  const form = useFormInstance();

  const handleForm = async () => {
    if (!action_url) return;
    const formData = form.getFieldsValue();

    try {
      const response = await fetch(action_url, {
        body: JSON.stringify(formData),
        method: method,
      });

      console.log(response);

      if (!response.ok) throw Error("Error");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form.Item name={id}>
      <Button
        onClick={handleForm}
        danger={style === "danger"}
        disabled={disabled}
        htmlType="button"
      >
        {name}
      </Button>
    </Form.Item>
  );
};
