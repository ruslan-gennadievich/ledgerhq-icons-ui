import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function Filters2Thin({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M9.951 20.813v-9.16l-4.889-5.09V3.187h13.875v3.371l-4.678 5.094v5.035l-4.308 4.125zM5.514 6.377l4.89 5.092v8.282l3.404-3.261v-5.018l4.678-5.094V3.64H5.514v2.738z"  /></Svg>;
}

export default Filters2Thin;