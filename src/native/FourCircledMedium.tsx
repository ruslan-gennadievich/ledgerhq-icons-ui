import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function FourCircledMedium({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 21.36c5.256 0 9.36-4.272 9.36-9.36 0-5.232-4.128-9.36-9.36-9.36-5.232 0-9.36 4.128-9.36 9.36 0 5.232 4.128 9.36 9.36 9.36zM4.56 12c0-4.176 3.264-7.44 7.44-7.44s7.44 3.264 7.44 7.44c0 4.056-3.264 7.44-7.44 7.44S4.56 16.176 4.56 12zm3.336 2.664h4.008v1.8h1.8v-1.8h1.368v-1.56h-1.368v-5.52h-2.016l-3.792 5.712v1.368zm1.776-1.56l2.256-3.408h.024c-.024.792-.048 1.8-.048 2.712v.696H9.672z"  /></Svg>;
}

export default FourCircledMedium;