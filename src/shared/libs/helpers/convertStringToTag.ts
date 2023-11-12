import { enumTags } from "../../types";
import {
  CustomCol,
  CustomForm,
  CustomInput,
  CustomRow,
  CustomSelect,
} from "../../ui";
import { FC } from "react";

export const convertStringToTag = (tagString: enumTags): FC | null => {
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

    default:
      return null;
  }
};
