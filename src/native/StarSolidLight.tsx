import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function StarSolidLight({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 2.184L9.624 9.552H1.68l6.384 4.704-2.424 7.56L12 17.16l6.36 4.656-2.448-7.56 6.408-4.704h-7.944L12 2.184z"  /></Svg>;
}

export default StarSolidLight;