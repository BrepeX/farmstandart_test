import { enumTags } from "../../types";
import {
  CustomCol,
  CustomDatepicker,
  CustomForm,
  CustomInput,
  CustomRow,
  CustomSelect,
  CustomSendButton,
  CustomTextarea,
  CustomCancelButton,
} from "../../ui";
import { FC } from "react";
import { TCustomColProps } from "../../ui/CustomCol.tsx";
import { GeneralControl } from "@widgets/collecting-components/types";

export const convertStringToTag = (
  tagString: enumTags | undefined,
): FC<TCustomColProps> | FC<GeneralControl> | null => {
  switch (tagString) {
    case enumTags.col:
      return CustomCol;

    case enumTags.form:
      return CustomForm;

    case enumTags.input:
      return CustomInput;

    case enumTags.row:
      return CustomRow;

    case enumTags.select:
      return CustomSelect;

    case enumTags.textarea:
      return CustomTextarea;

    case enumTags.datepicker:
      return CustomDatepicker;

    case enumTags.send:
      return CustomSendButton;

    case enumTags.rollback:
      return CustomCancelButton;

    default:
      return null;
  }
};
