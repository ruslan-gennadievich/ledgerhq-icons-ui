import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function CircledCrossSolidLight({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 21.12c5.112 0 9.12-4.152 9.12-9.12 0-5.088-4.032-9.12-9.12-9.12-5.088 0-9.12 4.032-9.12 9.12 0 5.088 4.032 9.12 9.12 9.12zm-4.536-5.424L11.16 12 7.464 8.28l.84-.84L12 11.16l3.72-3.72.84.84L12.84 12l3.72 3.696-.84.84L12 12.84l-3.696 3.696-.84-.84z"  /></Svg>;
}

export default CircledCrossSolidLight;