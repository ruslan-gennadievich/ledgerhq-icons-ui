import * as React from "react";
import  { Path, Circle } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function EmojiSadMedium({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path fillRule="evenodd" clipRule="evenodd" d="M12 21.36c-5.232 0-9.36-4.127-9.36-9.36 0-5.231 4.128-9.36 9.36-9.36 5.232 0 9.36 4.129 9.36 9.36 0 5.089-4.104 9.36-9.36 9.36zm0-16.8c-4.176 0-7.44 3.265-7.44 7.44 0 4.177 3.264 7.44 7.44 7.44s7.44-3.383 7.44-7.44c0-4.175-3.264-7.44-7.44-7.44z"  /><Path d="M9.6 14.8l-.577-.768.577.768zm4.8 0l.577-.768-.577.768zm-4.224.768A3.022 3.022 0 0112 14.96v-1.92c-1.116 0-2.148.37-2.977.993l1.153 1.535zM12 14.96c.686 0 1.316.226 1.824.607l1.153-1.534A4.942 4.942 0 0012 13.04v1.92zm-2.634 1.52a3.06 3.06 0 01.81-.912l-1.153-1.535a4.98 4.98 0 00-1.319 1.486l1.662.962zm4.458-.912c.328.246.604.557.81.913l1.662-.962a4.982 4.982 0 00-1.319-1.486l-1.153 1.535z"  /><Circle cx={9} cy={10.25} r={1.25}  /><Circle cx={15} cy={10.25} r={1.25}  /></Svg>;
}

export default EmojiSadMedium;