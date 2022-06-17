import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function EmojiSadThin({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 20.719a8.728 8.728 0 01-8.718-8.72A8.728 8.728 0 0112 3.282 8.728 8.728 0 0120.718 12 8.728 8.728 0 0112 20.719zm0-16.991A8.281 8.281 0 003.728 12 8.282 8.282 0 0012 20.272 8.282 8.282 0 0020.272 12 8.281 8.281 0 0012 3.728z"  /><Path d="M8.684 11.18a1.238 1.238 0 100-2.475 1.238 1.238 0 000 2.476zM15.251 11.18a1.238 1.238 0 100-2.475 1.238 1.238 0 000 2.476zM15.669 15.917a4.02 4.02 0 00-3.708-2.457 4.02 4.02 0 00-3.709 2.457l-.411-.174a4.467 4.467 0 014.12-2.73 4.467 4.467 0 014.119 2.73l-.411.174z"  /></Svg>;
}

export default EmojiSadThin;