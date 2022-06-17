import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function InstagramMedium({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M9.96 21.36h4.08c5.592 0 7.32-1.776 7.32-7.32V9.96c0-5.544-1.728-7.32-7.32-7.32H9.96c-5.592 0-7.32 1.776-7.32 7.32v4.08c0 5.544 1.728 7.32 7.32 7.32zm-5.664-7.32V9.96c0-4.608 1.032-5.664 5.664-5.664h4.08c4.632 0 5.664 1.056 5.664 5.664v4.08c0 4.608-1.032 5.664-5.664 5.664H9.96c-4.632 0-5.664-1.056-5.664-5.664zM7.2 12c0 2.664 2.136 4.8 4.8 4.8 2.664 0 4.8-2.136 4.8-4.8 0-2.664-2.136-4.8-4.8-4.8A4.783 4.783 0 007.2 12zm1.68 0A3.114 3.114 0 0112 8.88 3.114 3.114 0 0115.12 12 3.114 3.114 0 0112 15.12 3.114 3.114 0 018.88 12zm7.008-4.992c0 .6.504 1.104 1.104 1.104.6 0 1.104-.504 1.104-1.104 0-.6-.504-1.104-1.104-1.104-.6 0-1.104.504-1.104 1.104z"  /></Svg>;
}

export default InstagramMedium;