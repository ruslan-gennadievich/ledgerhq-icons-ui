import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function EmojiHappyLight({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 20.719a8.728 8.728 0 01-8.719-8.72 8.728 8.728 0 018.72-8.718A8.728 8.728 0 0120.718 12 8.728 8.728 0 0112 20.719zm0-16.43A7.72 7.72 0 004.29 12 7.72 7.72 0 0012 19.712 7.72 7.72 0 0019.71 12 7.72 7.72 0 0012 4.29z"  /><Path d="M8.794 11.208a1.197 1.197 0 100-2.395 1.197 1.197 0 000 2.395zM15.144 11.208a1.197 1.197 0 100-2.395 1.197 1.197 0 000 2.395zM8.644 13.629a3.6 3.6 0 003.319 2.2 3.6 3.6 0 003.32-2.2l.927.392a4.607 4.607 0 01-4.247 2.816 4.607 4.607 0 01-4.247-2.816l.928-.392z"  /></Svg>;
}

export default EmojiHappyLight;