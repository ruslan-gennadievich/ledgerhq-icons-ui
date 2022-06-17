import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function EmojiHappyRegular({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 20.719a8.729 8.729 0 01-8.719-8.72A8.728 8.728 0 0112 3.282 8.728 8.728 0 0120.718 12 8.729 8.729 0 0112 20.719zm0-16.295A7.585 7.585 0 004.424 12 7.585 7.585 0 0012 19.576 7.585 7.585 0 0019.576 12 7.585 7.585 0 0012 4.424z"  /><Path d="M8.82 11.214a1.187 1.187 0 100-2.374 1.187 1.187 0 000 2.374zM15.118 11.214a1.187 1.187 0 100-2.374 1.187 1.187 0 000 2.374zM8.733 13.552a3.499 3.499 0 003.228 2.142 3.498 3.498 0 003.227-2.142l1.055.445a4.641 4.641 0 01-4.284 2.836 4.64 4.64 0 01-4.28-2.836l1.054-.445z"  /></Svg>;
}

export default EmojiHappyRegular;