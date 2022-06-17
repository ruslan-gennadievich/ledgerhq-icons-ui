import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function WhithdrawMedium({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M4.08 5.08v4.64h3.6v1.92H2.16V3.16h19.68v8.48h-5.52V9.72h3.6V5.08H4.08z"  /><Path d="M16.344 18.496L12 22.84l-4.368-4.344 1.176-1.176 1.08 1.056c.386.386.751.794 1.136 1.224l.064.072V9.4h1.824v10.224c.384-.432.792-.864 1.176-1.248l1.056-1.056 1.2 1.176z"  /></Svg>;
}

export default WhithdrawMedium;