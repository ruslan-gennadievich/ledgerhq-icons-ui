import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function WarningUltraLight({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M2.472 19.64h19.056L12 2.36 2.472 19.64zm1.392-.792L12 4.064l8.136 14.784H3.864zm7.32-1.608h1.632v-1.632h-1.632v1.632zm.384-6.144l.072 2.952h.72l.072-2.952V8.624h-.864v2.472z"  /></Svg>;
}

export default WarningUltraLight;