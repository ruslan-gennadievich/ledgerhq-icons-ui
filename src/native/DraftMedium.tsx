import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function DraftMedium({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M4.08 21.36h15.84V2.64H9.432L4.08 7.992V21.36zM6 19.56V8.712h4.272V4.44H18v15.12H6z"  /></Svg>;
}

export default DraftMedium;