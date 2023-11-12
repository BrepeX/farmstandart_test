import { Button } from "antd";
import { FC } from "react";
import { GeneralControl } from "@widgets/collecting-components/types";

export const CustomSendButton: FC<GeneralControl> = ({}) => {
  console.log("button");
  return <Button>123</Button>;
};
