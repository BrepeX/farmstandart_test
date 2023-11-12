import { Row, RowProps } from "antd";
import { FC, PropsWithChildren } from "react";

type TCustomRowProps = RowProps & PropsWithChildren;

export const CustomRow: FC<TCustomRowProps> = ({ children, ...args }) => (
  <Row {...args}></Row>
);
