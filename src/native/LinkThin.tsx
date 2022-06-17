import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function LinkThin({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M10.488 13.512c1.512 1.584 4.08 1.584 5.592 0l3.624-3.624c1.584-1.512 1.56-4.08 0-5.592-1.512-1.56-4.08-1.584-5.592 0L11.424 6.96l.336.336 2.688-2.664c1.344-1.392 3.576-1.368 4.92 0 1.368 1.344 1.392 3.576 0 4.92l-3.624 3.624a3.42 3.42 0 01-4.92 0l-.792-.744-.336.36.792.72zm-6.192 6.192c1.512 1.56 4.08 1.584 5.592 0l2.688-2.664-.336-.336-2.688 2.664c-1.344 1.392-3.576 1.368-4.92 0-1.368-1.344-1.392-3.576 0-4.92l3.624-3.624a3.42 3.42 0 014.92 0l.792.744.336-.36-.792-.72c-1.512-1.584-4.08-1.584-5.592 0l-3.624 3.624c-1.584 1.512-1.56 4.08 0 5.592z"  /></Svg>;
}

export default LinkThin;