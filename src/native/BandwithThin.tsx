import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function BandwithThin({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M20.16 20.4h.48V3.6h-.48v16.8zm-16.8 0h.48v-4.248h-.48V20.4zm4.2 0h.48v-7.392h-.48V20.4zm4.2 0h.48V9.864h-.48V20.4zm4.2 0h.48V6.72h-.48V20.4z"  /></Svg>;
}

export default BandwithThin;