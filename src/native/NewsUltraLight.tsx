import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function NewsUltraLight({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M5.404 21.187A2.404 2.404 0 013 18.779V2.813h15.81v3.871H7.808v12.095a2.412 2.412 0 01-2.404 2.408zM3.823 3.637v15.142a1.586 1.586 0 001.58 1.584 1.582 1.582 0 001.582-1.584V5.86h11.002V3.637H3.823z"  /><Path d="M18.874 21.187H5.404v-.824h13.47a1.302 1.302 0 001.303-1.305V6.684h-1.778V5.86h2.6v13.198a2.13 2.13 0 01-2.125 2.129z"  /><Path d="M17.84 9.475h-7.808v.824h7.809v-.824zM17.84 13.264h-7.808v.824h7.809v-.824z"  /></Svg>;
}

export default NewsUltraLight;