import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function VideoUltraLight({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path fillRule="evenodd" clipRule="evenodd" d="M3.48 9.362a3.842 3.842 0 001.854 1.027H2.02v10.799h15.892v-3.94l4.069 3.383V10.218l-4.069 3.628v-3.457h-3.314a3.842 3.842 0 002.98-3.74 3.842 3.842 0 00-3.837-3.837 3.841 3.841 0 00-3.773 3.14 3.842 3.842 0 00-3.775-3.14A3.842 3.842 0 002.355 6.65 3.842 3.842 0 003.48 9.362zm9.403 1.027h-5.83a3.841 3.841 0 002.915-3.04 3.842 3.842 0 002.915 3.04zM4.087 4.545A2.982 2.982 0 018.3 4.544c.558.558.873 1.316.874 2.106a2.982 2.982 0 01-5.087 2.105 2.982 2.982 0 01-.873-2.105c0-.79.315-1.547.873-2.105zm7.549 0a2.982 2.982 0 012.105-.873 2.982 2.982 0 012.978 2.978 2.982 2.982 0 01-2.979 2.978 2.982 2.982 0 01-2.978-2.978c.001-.79.315-1.547.873-2.105zM2.879 20.329h14.174v-9.08H2.879v9.08zm18.242-1.53l-3.209-2.668v-1.135l3.21-2.861v6.664z"  /></Svg>;
}

export default VideoUltraLight;