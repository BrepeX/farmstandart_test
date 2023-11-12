import { Button, Form } from "antd";
import { FC } from "react";
import { GeneralControl } from "@widgets/collecting-components/types";
import { useNavigate } from "react-router-dom";

type TResponseData = {
  redirect: string;
};

export const CustomCancelButton: FC<GeneralControl> = ({
  name,
  id,
  disabled,
  style,
  action_url,
  method,
}) => {
  const navigate = useNavigate();

  const handleForm = async () => {
    if (!action_url) return;

    try {
      const response = await fetch(action_url, {
        method: method,
      });
      if (!response.ok) throw Error("Error");
      const responseJson: TResponseData = await response.json();
      navigate(responseJson.redirect);
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
        htmlType="submit"
      >
        {name}
      </Button>
    </Form.Item>
  );
};
