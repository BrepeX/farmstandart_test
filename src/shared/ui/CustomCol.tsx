import { FC, PropsWithChildren } from "react";
import { Col, type ColProps } from "antd";

type TCustomColProps = PropsWithChildren & ColProps;

export const CustomCol: FC<TCustomColProps> = ({ children, ...args }) => (
  <Col {...args}>{children}</Col>
);
