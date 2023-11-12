import { enumTags } from "@shared/types";

export type GeneralControl = {
  control_type: enumTags;
  id?: string;
  is_visible?: boolean;
  style?: string;
  span?: Span;
  children?: GeneralControl[];
  value_selection_kind?: string;
  put_value_url?: string;
  value_selection_url?: string;
  value?: any;
  label?: string;
  label_position?: "left" | "right";
  control_kind?: string;
  state?: string;
  text?: string;
  placeholder?: string;
  method?: string;
  action_kind?: string;
  name?: string;
  action_url?: string;
  disabled?: boolean;
  justify?: Justify | TJustifyValues;
};

interface Justify {
  xs?: TJustifyValues;
  sm?: TJustifyValues;
  md?: TJustifyValues;
  lg?: TJustifyValues;
  xl?: TJustifyValues;
  xxl?: TJustifyValues;
}

type TJustifyValues =
  | "start"
  | "end"
  | "center"
  | "space-around"
  | "space-between"
  | "space-evenly";

interface Span {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

export type TResponseData = {
  view: GeneralControl;
};
