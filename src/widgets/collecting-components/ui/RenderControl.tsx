import { FC, memo } from "react";
import { GeneralControl } from "../types";
import { convertStringToTag } from "@shared/libs/helpers";

type TRenderControlProps = {
  controlData?: GeneralControl;
};

const RenderControl: FC<TRenderControlProps> = memo(({ controlData }) => {
  if (!controlData || controlData.is_visible === false) {
    return null;
  }

  const Tag = convertStringToTag(controlData.control_type);
  const TagButton = convertStringToTag(controlData.action_kind);

  const children = controlData.children?.map((child, index) => (
    <RenderControl key={`${child.id}${index}`} controlData={child} />
  ));

  const { children: _, ...restProps } = controlData;

  if (Tag) {
    // @ts-ignore
    return <Tag {...restProps}>{children}</Tag>;
  }

  if (TagButton) return <TagButton {...restProps} />;
});

export default RenderControl;
