import { FC, PropsWithChildren } from "react";
import { Col } from "antd";
import { GeneralControl } from "@widgets/collecting-components/types";

export type TCustomColProps = PropsWithChildren & GeneralControl;

export const CustomCol: FC<TCustomColProps> = ({ children, span }) => (
  <Col {...span}>{children}</Col>
);
