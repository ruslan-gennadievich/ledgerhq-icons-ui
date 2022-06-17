import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function Filters2UltraLight({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M9.848 20.813v-9.188l-4.786-4.95V3.188h13.875V6.67l-4.578 4.952v4.9l-4.511 4.29zM5.8 6.377l4.785 4.95v7.767l3.036-2.888v-4.872l4.58-4.952V3.925H5.8v2.452z"  /></Svg>;
}

export default Filters2UltraLight;