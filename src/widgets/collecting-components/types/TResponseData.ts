export type GeneralControl = {
  control_type: string;
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
  label_position?: string;
  control_kind?: string;
  state?: string;
  text?: string;
  placeholder?: string;
  method?: string;
  action_kind?: string;
  name?: string;
  action_url?: string;
  disabled?: boolean;
  justify?: Justify;
};

interface Justify {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
}

interface Span {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

// Пример использования для объекта верхнего уровня
export type TResponseData = {
  view: GeneralControl;
};
