import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function ToolUltraLight({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M4.464 21.6c.528 0 1.056-.192 1.464-.6l9.816-9.792a4.15 4.15 0 001.344.216c2.472 0 4.512-2.04 4.512-4.512 0-.984-.36-2.016-1.032-2.688l-2.952 2.952-.792-.792 2.952-2.952C19.104 2.76 18.072 2.4 17.088 2.4c-2.472 0-4.512 2.04-4.512 4.512 0 .48.072.936.216 1.344l-9.768 9.792c-.432.432-.624.936-.624 1.464A2.07 2.07 0 004.464 21.6zm-1.248-2.064c0-.336.12-.648.384-.912L13.728 8.472a3.63 3.63 0 01-.336-1.56 3.698 3.698 0 013.696-3.696c.552 0 1.104.12 1.56.36l-2.76 2.784 1.752 1.752 2.784-2.76c.24.456.36 1.008.36 1.56a3.698 3.698 0 01-3.696 3.696 3.63 3.63 0 01-1.56-.336L5.376 20.424c-.288.264-.576.36-.912.36a1.255 1.255 0 01-1.248-1.248z"  /></Svg>;
}

export default ToolUltraLight;