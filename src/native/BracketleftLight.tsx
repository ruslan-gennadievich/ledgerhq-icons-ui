// @ts-nocheck
import * as React from "react";
import  { G, Path, Defs, ClipPath } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function BracketleftLight({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><G clipPath="url(#prefix__clip0_471_10519)"><Path d="M3.6-7.44V3.6h2.448v-8.592H20.4V-7.44H3.6zm0 38.88h16.8v-2.448H6.048V20.4H3.6v11.04z"  /></G><Defs><ClipPath id="prefix__clip0_471_10519"><Path  d="M0 0h24v24H0z" /></ClipPath></Defs></Svg>;
}

export default BracketleftLight;