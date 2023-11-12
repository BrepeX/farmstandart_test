import { enumTags } from "../../types";
import {
  CustomCol,
  CustomForm,
  CustomInput,
  CustomRow,
  CustomSelect,
} from "../../ui";
import { FC } from "react";
import { TCustomColProps } from "../../ui/CustomCol.tsx";
import { GeneralControl } from "@widgets/collecting-components/types";
import { CustomTextarea } from "../../ui/CustomTextarea.tsx";
import { CustomDatepicker } from "../../ui/CustomDatepicker.tsx";
import { CustomSendButton } from "../../ui/CustomSendButton.tsx";

export const convertStringToTag = (
  tagString: enumTags,
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

    default:
      return null;
  }
};
