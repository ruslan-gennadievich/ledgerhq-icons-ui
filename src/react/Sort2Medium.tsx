import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function Sort2Medium({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M2.64 13.548h12.72v-1.92H2.64v1.92zm0 5.52h5.92v-1.92H2.64v1.92zm0-11.04h18.72v-1.92H2.64v1.92z"  /></Svg>;
}

export default Sort2Medium;