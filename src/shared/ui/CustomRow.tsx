import { Row } from "antd";
import { FC, PropsWithChildren } from "react";
import { GeneralControl } from "@widgets/collecting-components/types";

type TCustomRowProps = GeneralControl & PropsWithChildren;

export const CustomRow: FC<TCustomRowProps> = ({ children, justify }) => (
  <Row justify={justify}>{children}</Row>
);
